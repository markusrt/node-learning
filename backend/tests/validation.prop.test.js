import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { validateInput, FORWARD_FIELDS, BACKWARD_FIELDS, DIFFERENCE_FIELDS } from '../src/validation.js';

// Generator für gültige Vorwärtskalkulations-Eingaben
const validForwardInputArb = fc.record({
  listPurchasePrice: fc.double({ min: 0, max: 100000, noNaN: true, noDefaultInfinity: true }),
  supplierDiscount: fc.double({ min: 0, max: 100, noNaN: true, noDefaultInfinity: true }),
  supplierCashDiscount: fc.double({ min: 0, max: 100, noNaN: true, noDefaultInfinity: true }),
  procurementCosts: fc.double({ min: 0, max: 100000, noNaN: true, noDefaultInfinity: true }),
  overheadSurcharge: fc.double({ min: 0, max: 100, noNaN: true, noDefaultInfinity: true }),
  profitSurcharge: fc.double({ min: 0, max: 100, noNaN: true, noDefaultInfinity: true }),
  customerCashDiscount: fc.double({ min: 0, max: 99.99, noNaN: true, noDefaultInfinity: true }),
  customerDiscount: fc.double({ min: 0, max: 99.99, noNaN: true, noDefaultInfinity: true }),
});

// Feldnamen der Vorwärtskalkulation
const forwardFieldNames = FORWARD_FIELDS.map((f) => f.name);

describe('Property 5: Validierung lehnt ungültige Eingaben ab', () => {
  // **Validates: Requirements 1.3, 6.3, 8.1, 8.2, 8.3**

  it('lehnt Eingaben mit mindestens einem leeren Pflichtfeld ab', () => {
    fc.assert(
      fc.property(
        validForwardInputArb,
        fc.constantFrom(...forwardFieldNames),
        (input, fieldToEmpty) => {
          // Ein zufälliges Feld auf undefined setzen
          const invalidInput = { ...input, [fieldToEmpty]: undefined };
          const result = validateInput(invalidInput, FORWARD_FIELDS);

          expect(result.valid).toBe(false);
          expect(result.errors.length).toBeGreaterThanOrEqual(1);
          expect(result.errors.some((e) => e.field === fieldToEmpty)).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('lehnt Eingaben mit mindestens einem nicht-numerischen Wert ab', () => {
    // Generator für nicht-numerische Werte
    const nonNumericArb = fc.oneof(
      fc.string().filter((s) => s !== ''),
      fc.boolean(),
      fc.constant(NaN)
    );

    fc.assert(
      fc.property(
        validForwardInputArb,
        fc.constantFrom(...forwardFieldNames),
        nonNumericArb,
        (input, fieldToBreak, badValue) => {
          const invalidInput = { ...input, [fieldToBreak]: badValue };
          const result = validateInput(invalidInput, FORWARD_FIELDS);

          expect(result.valid).toBe(false);
          expect(result.errors.length).toBeGreaterThanOrEqual(1);
          expect(result.errors.some((e) => e.field === fieldToBreak)).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('lehnt Eingaben mit mindestens einem negativen Betrag ab', () => {
    const negativeArb = fc.double({ min: -100000, max: -0.01, noNaN: true, noDefaultInfinity: true });

    fc.assert(
      fc.property(
        validForwardInputArb,
        fc.constantFrom(...forwardFieldNames),
        negativeArb,
        (input, fieldToBreak, negativeValue) => {
          const invalidInput = { ...input, [fieldToBreak]: negativeValue };
          const result = validateInput(invalidInput, FORWARD_FIELDS);

          expect(result.valid).toBe(false);
          expect(result.errors.length).toBeGreaterThanOrEqual(1);
          expect(result.errors.some((e) => e.field === fieldToBreak)).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });
});


// Nur die Prozentfelder aus den Vorwärtskalkulationsfeldern
const percentFieldNames = FORWARD_FIELDS
  .filter((f) => f.type === 'percent')
  .map((f) => f.name);

describe('Property 6: Prozentwerte nur im Bereich 0–100', () => {
  // **Validates: Requirements 1.4, 8.4**

  it('lehnt Prozentwerte größer als 100 ab', () => {
    const tooHighArb = fc.double({ min: 100.01, max: 10000, noNaN: true, noDefaultInfinity: true });

    fc.assert(
      fc.property(
        validForwardInputArb,
        fc.constantFrom(...percentFieldNames),
        tooHighArb,
        (input, fieldToBreak, tooHighValue) => {
          const invalidInput = { ...input, [fieldToBreak]: tooHighValue };
          const result = validateInput(invalidInput, FORWARD_FIELDS);

          expect(result.valid).toBe(false);
          expect(result.errors.some((e) => e.field === fieldToBreak)).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('lehnt negative Prozentwerte ab', () => {
    const negativeArb = fc.double({ min: -10000, max: -0.01, noNaN: true, noDefaultInfinity: true });

    fc.assert(
      fc.property(
        validForwardInputArb,
        fc.constantFrom(...percentFieldNames),
        negativeArb,
        (input, fieldToBreak, negativeValue) => {
          const invalidInput = { ...input, [fieldToBreak]: negativeValue };
          const result = validateInput(invalidInput, FORWARD_FIELDS);

          expect(result.valid).toBe(false);
          expect(result.errors.some((e) => e.field === fieldToBreak)).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('akzeptiert Prozentwerte im gültigen Bereich 0–100', () => {
    fc.assert(
      fc.property(validForwardInputArb, (input) => {
        const result = validateInput(input, FORWARD_FIELDS);
        // Alle Werte sind im gültigen Bereich, also keine Prozentfehler
        const percentErrors = result.errors.filter((e) =>
          e.message.includes('Prozentwert')
        );
        expect(percentErrors).toHaveLength(0);
      }),
      { numRuns: 100 }
    );
  });
});

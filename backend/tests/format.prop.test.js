import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { formatCurrency, formatPercent } from '../../frontend/src/format.js';

describe('Property 9: Formatierung von Beträgen und Prozenten', () => {
  // **Validates: Requirements 7.4, 7.5**

  it('formatCurrency erzeugt einen String mit genau 2 Nachkommastellen und Euro-Zeichen', () => {
    fc.assert(
      fc.property(
        fc.double({ min: -100000, max: 100000, noNaN: true, noDefaultInfinity: true }),
        (value) => {
          const result = formatCurrency(value);

          // Muss mit " €" enden
          expect(result).toMatch(/ €$/);

          // Muss genau 2 Nachkommastellen haben (Komma als Dezimaltrennzeichen)
          expect(result).toMatch(/,\d{2} €$/);

          // Der numerische Teil muss dem Eingabewert entsprechen
          const numericPart = result.replace(' €', '').replace(',', '.');
          expect(parseFloat(numericPart)).toBeCloseTo(value, 2);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('formatPercent erzeugt einen String mit Prozentzeichen', () => {
    fc.assert(
      fc.property(
        fc.double({ min: -1000, max: 1000, noNaN: true, noDefaultInfinity: true }),
        (value) => {
          const result = formatPercent(value);

          // Muss mit " %" enden
          expect(result).toMatch(/ %$/);

          // Der numerische Teil muss dem Eingabewert entsprechen
          const numericPart = result.replace(' %', '');
          expect(parseFloat(numericPart)).toBeCloseTo(value, 10);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('formatCurrency gibt leeren String für ungültige Werte zurück', () => {
    fc.assert(
      fc.property(
        fc.oneof(
          fc.string(),
          fc.boolean(),
          fc.constant(null),
          fc.constant(undefined),
          fc.constant(NaN),
          fc.constant(Infinity),
          fc.constant(-Infinity)
        ),
        (value) => {
          const result = formatCurrency(value);
          expect(result).toBe('');
        }
      ),
      { numRuns: 100 }
    );
  });

  it('formatPercent gibt leeren String für ungültige Werte zurück', () => {
    fc.assert(
      fc.property(
        fc.oneof(
          fc.string(),
          fc.boolean(),
          fc.constant(null),
          fc.constant(undefined),
          fc.constant(NaN),
          fc.constant(Infinity),
          fc.constant(-Infinity)
        ),
        (value) => {
          const result = formatPercent(value);
          expect(result).toBe('');
        }
      ),
      { numRuns: 100 }
    );
  });
});

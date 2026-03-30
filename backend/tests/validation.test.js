import { describe, it, expect } from 'vitest';
import { validateInput, FORWARD_FIELDS } from '../src/validation.js';

// Gültige Eingabedaten als Basis für die Tests
const VALID_INPUT = {
  listPurchasePrice: 100,
  supplierDiscount: 10,
  supplierCashDiscount: 2,
  procurementCosts: 5,
  overheadSurcharge: 25,
  profitSurcharge: 10,
  customerCashDiscount: 3,
  customerDiscount: 5,
};

describe('validateInput — Pflichtfelder', () => {
  it('akzeptiert gültige Eingaben', () => {
    const result = validateInput(VALID_INPUT, FORWARD_FIELDS);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it('lehnt leere Pflichtfelder ab (undefined)', () => {
    const input = { ...VALID_INPUT, listPurchasePrice: undefined };
    const result = validateInput(input, FORWARD_FIELDS);
    expect(result.valid).toBe(false);
    expect(result.errors).toContainEqual({
      field: 'listPurchasePrice',
      message: 'Bitte gib einen Wert ein',
    });
  });

  it('lehnt leere Pflichtfelder ab (leerer String)', () => {
    const input = { ...VALID_INPUT, supplierDiscount: '' };
    const result = validateInput(input, FORWARD_FIELDS);
    expect(result.valid).toBe(false);
    expect(result.errors).toContainEqual({
      field: 'supplierDiscount',
      message: 'Bitte gib einen Wert ein',
    });
  });

  it('lehnt leere Pflichtfelder ab (null)', () => {
    const input = { ...VALID_INPUT, procurementCosts: null };
    const result = validateInput(input, FORWARD_FIELDS);
    expect(result.valid).toBe(false);
    expect(result.errors).toContainEqual({
      field: 'procurementCosts',
      message: 'Bitte gib einen Wert ein',
    });
  });
});

describe('validateInput — Numerische Werte', () => {
  it('lehnt nicht-numerische Werte ab (String)', () => {
    const input = { ...VALID_INPUT, listPurchasePrice: 'abc' };
    const result = validateInput(input, FORWARD_FIELDS);
    expect(result.valid).toBe(false);
    expect(result.errors).toContainEqual({
      field: 'listPurchasePrice',
      message: 'Bitte gib eine gültige Zahl ein',
    });
  });

  it('lehnt NaN ab', () => {
    const input = { ...VALID_INPUT, supplierDiscount: NaN };
    const result = validateInput(input, FORWARD_FIELDS);
    expect(result.valid).toBe(false);
    expect(result.errors).toContainEqual({
      field: 'supplierDiscount',
      message: 'Bitte gib eine gültige Zahl ein',
    });
  });
});

describe('validateInput — Negative Werte', () => {
  it('lehnt negative Beträge ab', () => {
    const input = { ...VALID_INPUT, listPurchasePrice: -50 };
    const result = validateInput(input, FORWARD_FIELDS);
    expect(result.valid).toBe(false);
    expect(result.errors).toContainEqual({
      field: 'listPurchasePrice',
      message: 'Der Wert darf nicht negativ sein',
    });
  });

  it('lehnt negative Prozentwerte ab', () => {
    const input = { ...VALID_INPUT, supplierDiscount: -5 };
    const result = validateInput(input, FORWARD_FIELDS);
    expect(result.valid).toBe(false);
    expect(result.errors).toContainEqual({
      field: 'supplierDiscount',
      message: 'Der Wert darf nicht negativ sein',
    });
  });
});

describe('validateInput — Prozentwerte 0–100', () => {
  it('lehnt Prozentwerte größer als 100 ab', () => {
    const input = { ...VALID_INPUT, supplierDiscount: 150 };
    const result = validateInput(input, FORWARD_FIELDS);
    expect(result.valid).toBe(false);
    expect(result.errors).toContainEqual({
      field: 'supplierDiscount',
      message: 'Der Prozentwert darf nicht größer als 100 sein',
    });
  });

  it('akzeptiert Prozentwert von genau 0', () => {
    const input = { ...VALID_INPUT, supplierDiscount: 0 };
    const result = validateInput(input, FORWARD_FIELDS);
    // supplierDiscount = 0 ist gültig
    const discountError = result.errors.find((e) => e.field === 'supplierDiscount');
    expect(discountError).toBeUndefined();
  });

  it('akzeptiert Prozentwert von genau 100 (wenn kein Division-durch-Null-Schutz)', () => {
    const input = { ...VALID_INPUT, supplierDiscount: 100 };
    const result = validateInput(input, FORWARD_FIELDS);
    // supplierDiscount hat kein noDivisionByZero, also ist 100 erlaubt
    const discountError = result.errors.find((e) => e.field === 'supplierDiscount');
    expect(discountError).toBeUndefined();
  });

  it('lehnt Prozentwert von genau 100 ab (bei Division-durch-Null-Schutz)', () => {
    const input = { ...VALID_INPUT, customerCashDiscount: 100 };
    const result = validateInput(input, FORWARD_FIELDS);
    expect(result.valid).toBe(false);
    expect(result.errors).toContainEqual({
      field: 'customerCashDiscount',
      message: 'Der Prozentwert darf nicht 100 sein',
    });
  });
});

describe('validateInput — Mehrere Fehler', () => {
  it('sammelt mehrere Fehler gleichzeitig', () => {
    const input = {
      listPurchasePrice: -10,
      supplierDiscount: 150,
      supplierCashDiscount: 'abc',
      procurementCosts: null,
      overheadSurcharge: 25,
      profitSurcharge: 10,
      customerCashDiscount: 3,
      customerDiscount: 5,
    };
    const result = validateInput(input, FORWARD_FIELDS);
    expect(result.valid).toBe(false);
    expect(result.errors.length).toBeGreaterThanOrEqual(3);
  });
});

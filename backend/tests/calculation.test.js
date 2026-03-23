import { describe, it, expect } from 'vitest';
import { calculateForward, roundToTwo } from '../src/calculation.js';

describe('roundToTwo', () => {
  it('rundet auf zwei Nachkommastellen', () => {
    expect(roundToTwo(3.456)).toBe(3.46);
    expect(roundToTwo(3.454)).toBe(3.45);
    expect(roundToTwo(100)).toBe(100);
    expect(roundToTwo(0)).toBe(0);
  });
});

describe('calculateForward — Einkaufskalkulation', () => {
  it('berechnet den Bezugspreis korrekt (Standardbeispiel)', () => {
    // Listeneinkaufspreis 100€, 10% Rabatt, 2% Skonto, 5€ Bezugskosten
    const result = calculateForward({
      listPurchasePrice: 100,
      supplierDiscount: 10,
      supplierCashDiscount: 2,
      procurementCosts: 5
    });

    expect(result.targetPurchasePrice).toBe(90);
    expect(result.netPurchasePrice).toBe(88.2);
    expect(result.procurementPrice).toBe(93.2);
  });

  it('gibt alle Zwischenschritte im steps-Array zurück', () => {
    const result = calculateForward({
      listPurchasePrice: 100,
      supplierDiscount: 10,
      supplierCashDiscount: 2,
      procurementCosts: 5
    });

    expect(result.steps).toHaveLength(7);
    expect(result.steps[0]).toEqual({ label: 'Listeneinkaufspreis', value: 100 });
    expect(result.steps[6]).toEqual({ label: '= Bezugspreis', value: 93.2 });
  });

  it('berechnet korrekt wenn alle Prozentsätze und Bezugskosten 0 sind', () => {
    const result = calculateForward({
      listPurchasePrice: 100,
      supplierDiscount: 0,
      supplierCashDiscount: 0,
      procurementCosts: 0
    });

    expect(result.targetPurchasePrice).toBe(100);
    expect(result.netPurchasePrice).toBe(100);
    expect(result.procurementPrice).toBe(100);
  });
});

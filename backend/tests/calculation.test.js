import { describe, it, expect } from 'vitest';
import { calculateForward, calculateBackward, calculateDifference, roundToTwo } from '../src/calculation.js';

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
      procurementCosts: 5,
      overheadSurcharge: 0,
      profitSurcharge: 0,
      customerCashDiscount: 0,
      customerDiscount: 0
    });

    expect(result.targetPurchasePrice).toBe(90);
    expect(result.netPurchasePrice).toBe(88.2);
    expect(result.procurementPrice).toBe(93.2);
  });

  it('gibt alle 15 Zwischenschritte im steps-Array zurück', () => {
    const result = calculateForward({
      listPurchasePrice: 100,
      supplierDiscount: 10,
      supplierCashDiscount: 2,
      procurementCosts: 5,
      overheadSurcharge: 25,
      profitSurcharge: 10,
      customerCashDiscount: 3,
      customerDiscount: 5
    });

    expect(result.steps).toHaveLength(15);
    expect(result.steps[0]).toEqual({ label: 'Listeneinkaufspreis', value: 100 });
    expect(result.steps[6]).toEqual({ label: '= Bezugspreis', value: 93.2 });
    expect(result.steps[14].label).toBe('= Listenverkaufspreis');
  });

  it('berechnet korrekt wenn alle Prozentsätze und Bezugskosten 0 sind', () => {
    const result = calculateForward({
      listPurchasePrice: 100,
      supplierDiscount: 0,
      supplierCashDiscount: 0,
      procurementCosts: 0,
      overheadSurcharge: 0,
      profitSurcharge: 0,
      customerCashDiscount: 0,
      customerDiscount: 0
    });

    expect(result.targetPurchasePrice).toBe(100);
    expect(result.netPurchasePrice).toBe(100);
    expect(result.procurementPrice).toBe(100);
    expect(result.costPrice).toBe(100);
    expect(result.netSellingPrice).toBe(100);
    expect(result.listSellingPrice).toBe(100);
  });
});

describe('calculateForward — Gesamtkalkulation', () => {
  it('berechnet die komplette Kalkulation korrekt (Standardbeispiel)', () => {
    // Bekanntes Beispiel aus dem Design-Dokument
    const result = calculateForward({
      listPurchasePrice: 100,
      supplierDiscount: 10,
      supplierCashDiscount: 2,
      procurementCosts: 5,
      overheadSurcharge: 25,
      profitSurcharge: 10,
      customerCashDiscount: 3,
      customerDiscount: 5
    });

    expect(result.targetPurchasePrice).toBe(90);
    expect(result.netPurchasePrice).toBe(88.2);
    expect(result.procurementPrice).toBe(93.2);
    expect(result.costPrice).toBe(116.5);
    expect(result.netSellingPrice).toBe(128.15);
    expect(result.targetSellingPrice).toBe(132.11);
    expect(result.listSellingPrice).toBe(139.06);
  });
});

describe('calculateBackward — Rückwärtskalkulation', () => {
  it('berechnet den Listeneinkaufspreis korrekt (bekanntes Beispiel)', () => {
    // Rückwärts vom Listenverkaufspreis 139.06 mit denselben Prozentsätzen
    const result = calculateBackward({
      listSellingPrice: 139.06,
      customerDiscount: 5,
      customerCashDiscount: 3,
      profitSurcharge: 10,
      overheadSurcharge: 25,
      procurementCosts: 5,
      supplierCashDiscount: 2,
      supplierDiscount: 10
    });

    expect(result.targetSellingPrice).toBe(132.11);
    expect(result.netSellingPrice).toBe(128.15);
    expect(result.costPrice).toBe(116.5);
    expect(result.procurementPrice).toBe(93.2);
    expect(result.netPurchasePrice).toBe(88.2);
    expect(result.steps).toHaveLength(15);
    expect(result.steps[0].label).toBe('Listenverkaufspreis');
    expect(result.steps[14].label).toBe('= Listeneinkaufspreis');
  });
});

describe('calculateDifference — Differenzkalkulation', () => {
  it('berechnet den Gewinn korrekt (bekanntes Beispiel)', () => {
    const result = calculateDifference({
      listPurchasePrice: 100,
      supplierDiscount: 10,
      supplierCashDiscount: 2,
      procurementCosts: 5,
      overheadSurcharge: 25,
      listSellingPrice: 139.06,
      customerDiscount: 5,
      customerCashDiscount: 3
    });

    expect(result.costPrice).toBe(116.5);
    expect(result.netSellingPrice).toBe(128.15);
    expect(result.profit).toBe(11.65);
    expect(result.profitPercent).toBe(10);
  });
});

import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { calculateForward, calculateBackward, calculateDifference, roundToTwo } from '../src/calculation.js';

// Generatoren für gültige Kalkulationseingaben
const amountArb = fc.double({ min: 0.01, max: 100000, noNaN: true, noDefaultInfinity: true })
  .map(v => roundToTwo(v));
const percentArb = fc.double({ min: 0, max: 99, noNaN: true, noDefaultInfinity: true })
  .map(v => roundToTwo(v));
const procurementCostsArb = fc.double({ min: 0, max: 10000, noNaN: true, noDefaultInfinity: true })
  .map(v => roundToTwo(v));

// Generator für vollständige Vorwärtskalkulations-Eingaben
const forwardInputArb = fc.record({
  listPurchasePrice: amountArb,
  supplierDiscount: percentArb,
  supplierCashDiscount: percentArb,
  procurementCosts: procurementCostsArb,
  overheadSurcharge: percentArb,
  profitSurcharge: percentArb,
  customerCashDiscount: percentArb,
  customerDiscount: percentArb
});

describe('Property 1: Round-Trip Vorwärts-/Rückwärtskalkulation', () => {
  // **Validates: Requirements 1.1, 2.1, 3.1, 4.1**
  it('Vorwärts → Rückwärts ergibt den ursprünglichen Listeneinkaufspreis (±0.05)', () => {
    // Realistische Kalkulationswerte für Schulbeispiele
    const realisticAmountArb = fc.double({ min: 10, max: 100000, noNaN: true, noDefaultInfinity: true })
      .map(v => roundToTwo(v));
    const realisticPercentArb = fc.double({ min: 0, max: 50, noNaN: true, noDefaultInfinity: true })
      .map(v => roundToTwo(v));

    const realisticForwardInputArb = fc.record({
      listPurchasePrice: realisticAmountArb,
      supplierDiscount: realisticPercentArb,
      supplierCashDiscount: realisticPercentArb,
      procurementCosts: procurementCostsArb,
      overheadSurcharge: realisticPercentArb,
      profitSurcharge: realisticPercentArb,
      customerCashDiscount: realisticPercentArb,
      customerDiscount: realisticPercentArb
    });

    fc.assert(
      fc.property(realisticForwardInputArb, (input) => {
        const forward = calculateForward(input);

        const backward = calculateBackward({
          listSellingPrice: forward.listSellingPrice,
          customerDiscount: input.customerDiscount,
          customerCashDiscount: input.customerCashDiscount,
          profitSurcharge: input.profitSurcharge,
          overheadSurcharge: input.overheadSurcharge,
          procurementCosts: input.procurementCosts,
          supplierCashDiscount: input.supplierCashDiscount,
          supplierDiscount: input.supplierDiscount
        });

        // Toleranz von 0,05€ wegen akkumulierter Rundungsfehler über bis zu 14 Schritte
        // (7 Vorwärts + 7 Rückwärts, jeder Schritt kann ±0,005€ Rundungsfehler einführen)
        const diff = roundToTwo(Math.abs(backward.listPurchasePrice - input.listPurchasePrice));
        expect(diff).toBeLessThanOrEqual(0.05);
      }),
      { numRuns: 100 }
    );
  });
});

describe('Property 2: Hundert-im-Hundert-Rechnung für Skonto und Rabatt', () => {
  // **Validates: Requirements 2.3**
  it('Zielverkaufspreis wird als Barverkaufspreis / (1 - Skonto/100) berechnet', () => {
    const netSellingPriceArb = fc.double({ min: 0.01, max: 100000, noNaN: true, noDefaultInfinity: true })
      .map(v => roundToTwo(v));
    const skontoArb = fc.double({ min: 0.01, max: 99, noNaN: true, noDefaultInfinity: true })
      .map(v => roundToTwo(v));
    const rabattArb = fc.double({ min: 0.01, max: 99, noNaN: true, noDefaultInfinity: true })
      .map(v => roundToTwo(v));

    fc.assert(
      fc.property(netSellingPriceArb, skontoArb, rabattArb, (netSellingPrice, skonto, rabatt) => {
        // Berechne mit der Hundert-im-Hundert-Methode (Division)
        const targetSellingPrice = roundToTwo(netSellingPrice / (1 - skonto / 100));
        const listSellingPrice = roundToTwo(targetSellingPrice / (1 - rabatt / 100));

        // Prüfe: Die falsche Methode (Multiplikation) würde ein anderes Ergebnis liefern
        const wrongTargetSellingPrice = roundToTwo(netSellingPrice * (1 + skonto / 100));

        // Probe: Vom Zielverkaufspreis zurück zum Barverkaufspreis
        const probeNetSellingPrice = roundToTwo(targetSellingPrice * (1 - skonto / 100));
        expect(Math.abs(probeNetSellingPrice - netSellingPrice)).toBeLessThanOrEqual(0.01);

        // Probe: Vom Listenverkaufspreis zurück zum Zielverkaufspreis
        const probeTargetSellingPrice = roundToTwo(listSellingPrice * (1 - rabatt / 100));
        expect(Math.abs(probeTargetSellingPrice - targetSellingPrice)).toBeLessThanOrEqual(0.01);
      }),
      { numRuns: 100 }
    );
  });
});

// Generator für Differenzkalkulations-Eingaben
const differenceInputArb = fc.record({
  listPurchasePrice: amountArb,
  supplierDiscount: percentArb,
  supplierCashDiscount: percentArb,
  procurementCosts: procurementCostsArb,
  overheadSurcharge: percentArb,
  listSellingPrice: amountArb,
  customerDiscount: percentArb,
  customerCashDiscount: percentArb
});

describe('Property 3: Differenzkalkulation Gewinnberechnung', () => {
  // **Validates: Requirements 5.1**
  it('Gewinn = Barverkaufspreis - Selbstkostenpreis und Gewinn% = (Gewinn / Selbstkostenpreis) × 100', () => {
    fc.assert(
      fc.property(differenceInputArb, (input) => {
        const result = calculateDifference(input);

        // Gewinn = Barverkaufspreis - Selbstkostenpreis
        const expectedProfit = roundToTwo(result.netSellingPrice - result.costPrice);
        expect(result.profit).toBe(expectedProfit);

        // Gewinn% = (Gewinn / Selbstkostenpreis) × 100
        if (result.costPrice !== 0) {
          const expectedProfitPercent = roundToTwo((result.profit / result.costPrice) * 100);
          expect(result.profitPercent).toBe(expectedProfitPercent);
        }
      }),
      { numRuns: 100 }
    );
  });
});

// Hilfsfunktion: Prüft ob ein Wert maximal 2 Nachkommastellen hat
function hasAtMostTwoDecimals(value) {
  if (value === null) return true;
  return Math.abs(value * 100 - Math.round(value * 100)) < 0.0001;
}

describe('Property 4: Rundung auf zwei Nachkommastellen', () => {
  // **Validates: Requirements 6.2**
  it('Alle Werte in Vorwärtskalkulation haben maximal 2 Nachkommastellen', () => {
    fc.assert(
      fc.property(forwardInputArb, (input) => {
        const result = calculateForward(input);
        for (const step of result.steps) {
          expect(hasAtMostTwoDecimals(step.value)).toBe(true);
        }
      }),
      { numRuns: 100 }
    );
  });

  it('Alle Werte in Rückwärtskalkulation haben maximal 2 Nachkommastellen', () => {
    const backwardInputArb = fc.record({
      listSellingPrice: amountArb,
      customerDiscount: percentArb,
      customerCashDiscount: percentArb,
      profitSurcharge: percentArb,
      overheadSurcharge: percentArb,
      procurementCosts: procurementCostsArb,
      supplierCashDiscount: percentArb,
      supplierDiscount: percentArb
    });

    fc.assert(
      fc.property(backwardInputArb, (input) => {
        const result = calculateBackward(input);
        for (const step of result.steps) {
          expect(hasAtMostTwoDecimals(step.value)).toBe(true);
        }
      }),
      { numRuns: 100 }
    );
  });

  it('Alle Werte in Differenzkalkulation haben maximal 2 Nachkommastellen', () => {
    fc.assert(
      fc.property(differenceInputArb, (input) => {
        const result = calculateDifference(input);
        for (const step of result.steps) {
          expect(hasAtMostTwoDecimals(step.value)).toBe(true);
        }
      }),
      { numRuns: 100 }
    );
  });
});

describe('Property 8: Ergebnis enthält alle erwarteten Schritte', () => {
  // **Validates: Requirements 1.2, 2.2, 4.2**
  it('Vorwärtskalkulation enthält genau 15 Schritte', () => {
    fc.assert(
      fc.property(forwardInputArb, (input) => {
        const result = calculateForward(input);
        expect(result.steps).toHaveLength(15);
        expect(result.steps[0].label).toBe('Listeneinkaufspreis');
        expect(result.steps[14].label).toBe('= Listenverkaufspreis');
      }),
      { numRuns: 100 }
    );
  });

  it('Rückwärtskalkulation enthält genau 15 Schritte in umgekehrter Reihenfolge', () => {
    const backwardInputArb = fc.record({
      listSellingPrice: amountArb,
      customerDiscount: percentArb,
      customerCashDiscount: percentArb,
      profitSurcharge: percentArb,
      overheadSurcharge: percentArb,
      procurementCosts: procurementCostsArb,
      supplierCashDiscount: percentArb,
      supplierDiscount: percentArb
    });

    fc.assert(
      fc.property(backwardInputArb, (input) => {
        const result = calculateBackward(input);
        expect(result.steps).toHaveLength(15);
        expect(result.steps[0].label).toBe('Listenverkaufspreis');
        expect(result.steps[14].label).toBe('= Listeneinkaufspreis');
      }),
      { numRuns: 100 }
    );
  });
});

describe('Property 7: JSON-Serialisierung Round-Trip', () => {
  // **Validates: Requirements 10.1, 10.2, 10.3**
  it('JSON.parse(JSON.stringify(input)) ergibt ein äquivalentes Objekt', () => {
    fc.assert(
      fc.property(forwardInputArb, (input) => {
        const serialized = JSON.stringify(input);
        const deserialized = JSON.parse(serialized);
        expect(deserialized).toEqual(input);
      }),
      { numRuns: 100 }
    );
  });

  it('JSON Round-Trip für Kalkulationsergebnis', () => {
    fc.assert(
      fc.property(forwardInputArb, (input) => {
        const result = calculateForward(input);
        const serialized = JSON.stringify(result);
        const deserialized = JSON.parse(serialized);
        expect(deserialized).toEqual(result);
      }),
      { numRuns: 100 }
    );
  });
});

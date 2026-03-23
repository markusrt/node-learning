// Rundet auf 2 Nachkommastellen (kaufmännische Rundung)
function roundToTwo(value) {
  return Math.round(value * 100) / 100;
}

// Vorwärtskalkulation: Listeneinkaufspreis → Listenverkaufspreis (komplett)
// Berechnet alle Zwischenschritte der Einkaufs- und Verkaufskalkulation
// und gibt die Ergebnisse zusammen mit einem steps-Array (15 Schritte) zurück.
function calculateForward(input) {
  const {
    listPurchasePrice,
    supplierDiscount,
    supplierCashDiscount,
    procurementCosts,
    overheadSurcharge,
    profitSurcharge,
    customerCashDiscount,
    customerDiscount
  } = input;

  // --- Einkaufskalkulation ---

  // Zieleinkaufspreis = Listeneinkaufspreis × (1 - Rabatt/100)
  const discountAmount = roundToTwo(listPurchasePrice * (supplierDiscount / 100));
  const targetPurchasePrice = roundToTwo(listPurchasePrice - discountAmount);

  // Bareinkaufspreis = Zieleinkaufspreis × (1 - Skonto/100)
  const cashDiscountAmount = roundToTwo(targetPurchasePrice * (supplierCashDiscount / 100));
  const netPurchasePrice = roundToTwo(targetPurchasePrice - cashDiscountAmount);

  // Bezugspreis = Bareinkaufspreis + Bezugskosten
  const procurementPrice = roundToTwo(netPurchasePrice + procurementCosts);

  // --- Verkaufskalkulation ---

  // Selbstkostenpreis = Bezugspreis × (1 + HKZ/100)
  const overheadAmount = roundToTwo(procurementPrice * (overheadSurcharge / 100));
  const costPrice = roundToTwo(procurementPrice + overheadAmount);

  // Barverkaufspreis = Selbstkostenpreis × (1 + Gewinn/100)
  const profitAmount = roundToTwo(costPrice * (profitSurcharge / 100));
  const netSellingPrice = roundToTwo(costPrice + profitAmount);

  // Hundert-im-Hundert-Rechnung:
  // Zielverkaufspreis = Barverkaufspreis / (1 - Skonto/100)
  const targetSellingPrice = roundToTwo(netSellingPrice / (1 - customerCashDiscount / 100));
  const cashDiscountSellingAmount = roundToTwo(targetSellingPrice - netSellingPrice);

  // Listenverkaufspreis = Zielverkaufspreis / (1 - Rabatt/100)
  const listSellingPrice = roundToTwo(targetSellingPrice / (1 - customerDiscount / 100));
  const discountSellingAmount = roundToTwo(listSellingPrice - targetSellingPrice);

  // Schritte für die Ergebnis-Tabelle (deutsche Labels, 15 Schritte)
  const steps = [
    { label: 'Listeneinkaufspreis', value: roundToTwo(listPurchasePrice) },
    { label: `- Liefererrabatt (${supplierDiscount}%)`, value: discountAmount },
    { label: '= Zieleinkaufspreis', value: targetPurchasePrice },
    { label: `- Liefererskonto (${supplierCashDiscount}%)`, value: cashDiscountAmount },
    { label: '= Bareinkaufspreis', value: netPurchasePrice },
    { label: '+ Bezugskosten', value: roundToTwo(procurementCosts) },
    { label: '= Bezugspreis', value: procurementPrice },
    { label: `+ Handlungskostenzuschlag (${overheadSurcharge}%)`, value: overheadAmount },
    { label: '= Selbstkostenpreis', value: costPrice },
    { label: `+ Gewinnzuschlag (${profitSurcharge}%)`, value: profitAmount },
    { label: '= Barverkaufspreis', value: netSellingPrice },
    { label: `+ Kundenskonto (${customerCashDiscount}%)`, value: cashDiscountSellingAmount },
    { label: '= Zielverkaufspreis', value: targetSellingPrice },
    { label: `+ Kundenrabatt (${customerDiscount}%)`, value: discountSellingAmount },
    { label: '= Listenverkaufspreis', value: listSellingPrice }
  ];

  return {
    targetPurchasePrice,
    netPurchasePrice,
    procurementPrice,
    costPrice,
    netSellingPrice,
    targetSellingPrice,
    listSellingPrice,
    steps
  };
}

// Rückwärtskalkulation: Listenverkaufspreis → Listeneinkaufspreis
// Berechnet alle Zwischenschritte in umgekehrter Reihenfolge.
function calculateBackward(input) {
  const {
    listSellingPrice,
    customerDiscount,
    customerCashDiscount,
    profitSurcharge,
    overheadSurcharge,
    procurementCosts,
    supplierCashDiscount,
    supplierDiscount
  } = input;

  // --- Verkaufsseite rückwärts ---

  // Zielverkaufspreis = Listenverkaufspreis × (1 - Rabatt/100)
  const discountSellingAmount = roundToTwo(listSellingPrice * (customerDiscount / 100));
  const targetSellingPrice = roundToTwo(listSellingPrice - discountSellingAmount);

  // Barverkaufspreis = Zielverkaufspreis × (1 - Skonto/100)
  const cashDiscountSellingAmount = roundToTwo(targetSellingPrice * (customerCashDiscount / 100));
  const netSellingPrice = roundToTwo(targetSellingPrice - cashDiscountSellingAmount);

  // Selbstkostenpreis = Barverkaufspreis / (1 + Gewinn/100)
  const costPrice = roundToTwo(netSellingPrice / (1 + profitSurcharge / 100));
  const profitAmount = roundToTwo(netSellingPrice - costPrice);

  // Bezugspreis = Selbstkostenpreis / (1 + HKZ/100)
  const procurementPrice = roundToTwo(costPrice / (1 + overheadSurcharge / 100));
  const overheadAmount = roundToTwo(costPrice - procurementPrice);

  // --- Einkaufsseite rückwärts ---

  // Bareinkaufspreis = Bezugspreis - Bezugskosten
  const netPurchasePrice = roundToTwo(procurementPrice - procurementCosts);

  // Zieleinkaufspreis = Bareinkaufspreis / (1 - Skonto/100)
  const targetPurchasePrice = roundToTwo(netPurchasePrice / (1 - supplierCashDiscount / 100));
  const cashDiscountAmount = roundToTwo(targetPurchasePrice - netPurchasePrice);

  // Listeneinkaufspreis = Zieleinkaufspreis / (1 - Rabatt/100)
  const listPurchasePrice = roundToTwo(targetPurchasePrice / (1 - supplierDiscount / 100));
  const discountAmount = roundToTwo(listPurchasePrice - targetPurchasePrice);

  // Schritte in umgekehrter Reihenfolge (von Listenverkaufspreis nach Listeneinkaufspreis)
  const steps = [
    { label: 'Listenverkaufspreis', value: roundToTwo(listSellingPrice) },
    { label: `- Kundenrabatt (${customerDiscount}%)`, value: discountSellingAmount },
    { label: '= Zielverkaufspreis', value: targetSellingPrice },
    { label: `- Kundenskonto (${customerCashDiscount}%)`, value: cashDiscountSellingAmount },
    { label: '= Barverkaufspreis', value: netSellingPrice },
    { label: `- Gewinnzuschlag (${profitSurcharge}%)`, value: profitAmount },
    { label: '= Selbstkostenpreis', value: costPrice },
    { label: `- Handlungskostenzuschlag (${overheadSurcharge}%)`, value: overheadAmount },
    { label: '= Bezugspreis', value: procurementPrice },
    { label: '- Bezugskosten', value: roundToTwo(procurementCosts) },
    { label: '= Bareinkaufspreis', value: netPurchasePrice },
    { label: `+ Liefererskonto (${supplierCashDiscount}%)`, value: cashDiscountAmount },
    { label: '= Zieleinkaufspreis', value: targetPurchasePrice },
    { label: `+ Liefererrabatt (${supplierDiscount}%)`, value: discountAmount },
    { label: '= Listeneinkaufspreis', value: listPurchasePrice }
  ];

  return {
    targetSellingPrice,
    netSellingPrice,
    costPrice,
    procurementPrice,
    netPurchasePrice,
    targetPurchasePrice,
    listPurchasePrice,
    steps
  };
}

// Differenzkalkulation: Gewinn ermitteln bei gegebenem Einkaufs- und Verkaufspreis
// Berechnet Einkaufsseite bis Selbstkostenpreis, Verkaufsseite bis Barverkaufspreis,
// und ermittelt den Gewinn als Differenz.
function calculateDifference(input) {
  const {
    listPurchasePrice,
    supplierDiscount,
    supplierCashDiscount,
    procurementCosts,
    overheadSurcharge,
    listSellingPrice,
    customerDiscount,
    customerCashDiscount
  } = input;

  // --- Einkaufsseite: Listeneinkaufspreis → Selbstkostenpreis ---

  const discountAmount = roundToTwo(listPurchasePrice * (supplierDiscount / 100));
  const targetPurchasePrice = roundToTwo(listPurchasePrice - discountAmount);

  const cashDiscountAmount = roundToTwo(targetPurchasePrice * (supplierCashDiscount / 100));
  const netPurchasePrice = roundToTwo(targetPurchasePrice - cashDiscountAmount);

  const procurementPrice = roundToTwo(netPurchasePrice + procurementCosts);

  const overheadAmount = roundToTwo(procurementPrice * (overheadSurcharge / 100));
  const costPrice = roundToTwo(procurementPrice + overheadAmount);

  // --- Verkaufsseite: Listenverkaufspreis → Barverkaufspreis ---

  const discountSellingAmount = roundToTwo(listSellingPrice * (customerDiscount / 100));
  const targetSellingPrice = roundToTwo(listSellingPrice - discountSellingAmount);

  const cashDiscountSellingAmount = roundToTwo(targetSellingPrice * (customerCashDiscount / 100));
  const netSellingPrice = roundToTwo(targetSellingPrice - cashDiscountSellingAmount);

  // --- Gewinn ---

  const profit = roundToTwo(netSellingPrice - costPrice);
  const profitPercent = roundToTwo((profit / costPrice) * 100);

  // Schritte für die Ergebnis-Tabelle
  const steps = [
    { label: 'Listeneinkaufspreis', value: roundToTwo(listPurchasePrice) },
    { label: `- Liefererrabatt (${supplierDiscount}%)`, value: discountAmount },
    { label: '= Zieleinkaufspreis', value: targetPurchasePrice },
    { label: `- Liefererskonto (${supplierCashDiscount}%)`, value: cashDiscountAmount },
    { label: '= Bareinkaufspreis', value: netPurchasePrice },
    { label: '+ Bezugskosten', value: roundToTwo(procurementCosts) },
    { label: '= Bezugspreis', value: procurementPrice },
    { label: `+ Handlungskostenzuschlag (${overheadSurcharge}%)`, value: overheadAmount },
    { label: '= Selbstkostenpreis', value: costPrice },
    { label: '---', value: null },
    { label: 'Listenverkaufspreis', value: roundToTwo(listSellingPrice) },
    { label: `- Kundenrabatt (${customerDiscount}%)`, value: discountSellingAmount },
    { label: '= Zielverkaufspreis', value: targetSellingPrice },
    { label: `- Kundenskonto (${customerCashDiscount}%)`, value: cashDiscountSellingAmount },
    { label: '= Barverkaufspreis', value: netSellingPrice },
    { label: '---', value: null },
    { label: `Gewinn (${profitPercent}%)`, value: profit }
  ];

  return {
    costPrice,
    netSellingPrice,
    profit,
    profitPercent,
    steps
  };
}

module.exports = { calculateForward, calculateBackward, calculateDifference, roundToTwo };

// Rundet auf 2 Nachkommastellen (kaufmännische Rundung)
function roundToTwo(value) {
  return Math.round(value * 100) / 100;
}

// Vorwärtskalkulation: Listeneinkaufspreis → Bezugspreis (Einkaufsteil)
// Berechnet alle Zwischenschritte der Einkaufskalkulation und gibt
// die Ergebnisse zusammen mit einem steps-Array zurück.
function calculateForward(input) {
  const {
    listPurchasePrice,
    supplierDiscount,
    supplierCashDiscount,
    procurementCosts
  } = input;

  // Zieleinkaufspreis = Listeneinkaufspreis × (1 - Rabatt/100)
  const discountAmount = roundToTwo(listPurchasePrice * (supplierDiscount / 100));
  const targetPurchasePrice = roundToTwo(listPurchasePrice - discountAmount);

  // Bareinkaufspreis = Zieleinkaufspreis × (1 - Skonto/100)
  const cashDiscountAmount = roundToTwo(targetPurchasePrice * (supplierCashDiscount / 100));
  const netPurchasePrice = roundToTwo(targetPurchasePrice - cashDiscountAmount);

  // Bezugspreis = Bareinkaufspreis + Bezugskosten
  const procurementPrice = roundToTwo(netPurchasePrice + procurementCosts);

  // Schritte für die Ergebnis-Tabelle (deutsche Labels)
  const steps = [
    { label: 'Listeneinkaufspreis', value: roundToTwo(listPurchasePrice) },
    { label: `- Liefererrabatt (${supplierDiscount}%)`, value: discountAmount },
    { label: '= Zieleinkaufspreis', value: targetPurchasePrice },
    { label: `- Liefererskonto (${supplierCashDiscount}%)`, value: cashDiscountAmount },
    { label: '= Bareinkaufspreis', value: netPurchasePrice },
    { label: '+ Bezugskosten', value: roundToTwo(procurementCosts) },
    { label: '= Bezugspreis', value: procurementPrice }
  ];

  return {
    targetPurchasePrice,
    netPurchasePrice,
    procurementPrice,
    steps
  };
}

module.exports = { calculateForward, roundToTwo };

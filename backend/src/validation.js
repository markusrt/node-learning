// Validiert Eingabedaten anhand einer Felddefinition
// data: das Eingabe-Objekt (z.B. req.body)
// fields: Array von { name, type: 'amount' | 'percent', required: boolean }
// Gibt { valid, errors } zurück
function validateInput(data, fields) {
  const errors = [];

  for (const field of fields) {
    const value = data[field.name];

    // Pflichtfeld-Prüfung: Wert darf nicht leer oder undefined sein
    if (field.required && (value === undefined || value === null || value === '')) {
      errors.push({ field: field.name, message: 'Bitte gib einen Wert ein' });
      continue;
    }

    // Wenn kein Pflichtfeld und kein Wert vorhanden, überspringen
    if (value === undefined || value === null || value === '') {
      continue;
    }

    // Numerische Prüfung: Wert muss eine gültige Zahl sein
    if (typeof value !== 'number' || isNaN(value)) {
      errors.push({ field: field.name, message: 'Bitte gib eine gültige Zahl ein' });
      continue;
    }

    // Negativwert-Prüfung: Beträge und Prozentwerte dürfen nicht negativ sein
    if (value < 0) {
      errors.push({ field: field.name, message: 'Der Wert darf nicht negativ sein' });
      continue;
    }

    // Prozentwert-Prüfung: Werte müssen zwischen 0 und 100 liegen
    if (field.type === 'percent' && value > 100) {
      errors.push({ field: field.name, message: 'Der Prozentwert darf nicht größer als 100 sein' });
      continue;
    }

    // Division-durch-Null-Schutz: Skonto und Rabatt dürfen nicht genau 100 sein
    if (field.type === 'percent' && field.noDivisionByZero && value === 100) {
      errors.push({ field: field.name, message: 'Der Prozentwert darf nicht 100 sein' });
    }
  }

  return { valid: errors.length === 0, errors };
}

// Felddefinitionen für die Vorwärtskalkulation
const FORWARD_FIELDS = [
  { name: 'listPurchasePrice', type: 'amount', required: true },
  { name: 'supplierDiscount', type: 'percent', required: true },
  { name: 'supplierCashDiscount', type: 'percent', required: true },
  { name: 'procurementCosts', type: 'amount', required: true },
  { name: 'overheadSurcharge', type: 'percent', required: true },
  { name: 'profitSurcharge', type: 'percent', required: true },
  { name: 'customerCashDiscount', type: 'percent', required: true, noDivisionByZero: true },
  { name: 'customerDiscount', type: 'percent', required: true, noDivisionByZero: true },
];

// Felddefinitionen für die Rückwärtskalkulation
const BACKWARD_FIELDS = [
  { name: 'listSellingPrice', type: 'amount', required: true },
  { name: 'customerDiscount', type: 'percent', required: true },
  { name: 'customerCashDiscount', type: 'percent', required: true },
  { name: 'profitSurcharge', type: 'percent', required: true },
  { name: 'overheadSurcharge', type: 'percent', required: true },
  { name: 'procurementCosts', type: 'amount', required: true },
  { name: 'supplierCashDiscount', type: 'percent', required: true, noDivisionByZero: true },
  { name: 'supplierDiscount', type: 'percent', required: true, noDivisionByZero: true },
];

// Felddefinitionen für die Differenzkalkulation
const DIFFERENCE_FIELDS = [
  { name: 'listPurchasePrice', type: 'amount', required: true },
  { name: 'supplierDiscount', type: 'percent', required: true },
  { name: 'supplierCashDiscount', type: 'percent', required: true },
  { name: 'procurementCosts', type: 'amount', required: true },
  { name: 'overheadSurcharge', type: 'percent', required: true },
  { name: 'listSellingPrice', type: 'amount', required: true },
  { name: 'customerDiscount', type: 'percent', required: true },
  { name: 'customerCashDiscount', type: 'percent', required: true },
];

module.exports = { validateInput, FORWARD_FIELDS, BACKWARD_FIELDS, DIFFERENCE_FIELDS };

// Formatiert einen Betrag mit 2 Nachkommastellen und Euro-Zeichen
// Beispiel: 123.4 → "123,40 €"
export function formatCurrency(value) {
  if (typeof value !== 'number' || !isFinite(value)) {
    return '';
  }
  return `${value.toFixed(2).replace('.', ',')} €`;
}

// Formatiert einen Prozentwert mit Prozentzeichen
// Beispiel: 10 → "10 %"
export function formatPercent(value) {
  if (typeof value !== 'number' || !isFinite(value)) {
    return '';
  }
  return `${value} %`;
}

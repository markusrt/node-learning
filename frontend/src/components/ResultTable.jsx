import { formatCurrency } from '../format.js';

// Tabelle zur Anzeige des steps-Arrays mit Euro- und Prozent-Formatierung
function ResultTable({ steps }) {
  if (!steps || steps.length === 0) {
    return null;
  }

  // Prüft, ob eine Zeile ein Ergebnis ist (Label beginnt mit "=")
  const isResultRow = (label) => label.startsWith('=');

  // Prüft, ob eine Zeile eine Trennlinie ist (z.B. zwischen Einkaufs- und Verkaufsseite)
  const isSeparatorRow = (label) => label === '---';

  // Ermittelt den Index der letzten Ergebniszeile (Endwert der Kalkulation)
  const lastResultIndex = (() => {
    for (let i = steps.length - 1; i >= 0; i--) {
      if (isResultRow(steps[i].label)) return i;
    }
    return -1;
  })();

  // Formatiert einen Betrag — nutzt die zentrale Hilfsfunktion
  const formatValue = (value) => {
    if (value === null || value === undefined) {
      return '';
    }
    return formatCurrency(value);
  };

  // Bestimmt die CSS-Klasse für eine Zeile
  const getRowClass = (step, index) => {
    if (isSeparatorRow(step.label)) return 'result-table__row--separator';
    if (index === lastResultIndex) return 'result-table__row--final';
    if (isResultRow(step.label)) return 'result-table__row--result';
    return '';
  };

  return (
    <table className="result-table" role="table">
      <thead>
        <tr>
          <th>Schritt</th>
          <th className="result-table__value">Betrag</th>
        </tr>
      </thead>
      <tbody>
        {steps.map((step, index) => (
          isSeparatorRow(step.label) ? (
            <tr key={index} className="result-table__row--separator">
              <td colSpan="2"><hr /></td>
            </tr>
          ) : (
            <tr key={index} className={getRowClass(step, index)}>
              <td>{step.label}</td>
              <td className="result-table__value">{formatValue(step.value)}</td>
            </tr>
          )
        ))}
      </tbody>
    </table>
  );
}

export default ResultTable;

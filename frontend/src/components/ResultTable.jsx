// Tabelle zur Anzeige des steps-Arrays mit Euro- und Prozent-Formatierung
function ResultTable({ steps }) {
  if (!steps || steps.length === 0) {
    return null;
  }

  // Prüft, ob eine Zeile ein Ergebnis ist (Label beginnt mit "=")
  const isResultRow = (label) => label.startsWith('=');

  // Prüft, ob eine Zeile eine Trennlinie ist (z.B. zwischen Einkaufs- und Verkaufsseite)
  const isSeparatorRow = (label) => label === '---';

  // Formatiert einen Betrag mit 2 Nachkommastellen und Euro-Zeichen
  const formatValue = (value) => {
    if (value === null || value === undefined) {
      return '';
    }
    return `${value.toFixed(2).replace('.', ',')} €`;
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
            <tr
              key={index}
              className={isResultRow(step.label) ? 'result-table__row--result' : ''}
            >
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

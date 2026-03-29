// Sendet eine Kalkulationsanfrage an das Backend und gibt das Ergebnis zurück
async function calculate(calculationType, input) {
  const response = await fetch(`/api/${calculationType}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });

  const data = await response.json();

  if (!response.ok) {
    // Backend hat einen Fehler zurückgegeben (z.B. Validierungsfehler)
    const error = new Error(data.message || 'Berechnungsfehler');
    error.errors = data.errors || [];
    throw error;
  }

  return data;
}

export default calculate;

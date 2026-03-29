// Anzeige von Backend-Fehlermeldungen
function ErrorDisplay({ errors }) {
  if (!errors || errors.length === 0) {
    return null;
  }

  return (
    <div className="error-display" role="alert">
      <p className="error-display__title">Fehler bei der Berechnung:</p>
      <ul className="error-display__list">
        {errors.map((err, index) => (
          <li key={index}>{err.message || err}</li>
        ))}
      </ul>
    </div>
  );
}

export default ErrorDisplay;

import { useState } from 'react';
import InputField from '../components/InputField.jsx';
import ResultTable from '../components/ResultTable.jsx';
import ErrorDisplay from '../components/ErrorDisplay.jsx';
import calculate from '../api.js';

// Startwerte für das Formular (alle Felder leer)
const INITIAL_VALUES = {
  listSellingPrice: '',
  customerDiscount: '',
  customerCashDiscount: '',
  profitSurcharge: '',
  overheadSurcharge: '',
  procurementCosts: '',
  supplierCashDiscount: '',
  supplierDiscount: '',
};

// Hilfsfunktion: Prüft ob alle Felder ausgefüllt sind
function allFieldsFilled(values) {
  return Object.values(values).every((v) => v !== '');
}

// Hilfsfunktion: Baut ein Objekt mit Feld-Fehlermeldungen aus dem Backend-Fehler-Array
function buildFieldErrors(errors) {
  const fieldErrors = {};
  for (const err of errors) {
    if (err.field) {
      fieldErrors[err.field] = err.message;
    }
  }
  return fieldErrors;
}

// Rückwärtskalkulation-Seite mit Formular und Ergebnis-Tabelle
function BackwardPage() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState([]);
  const [fieldErrors, setFieldErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Aktualisiert ein einzelnes Eingabefeld
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Sendet die Eingaben an das Backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setFieldErrors({});
    setResult(null);

    // Minimale Frontend-Prüfung: Sind alle Felder ausgefüllt?
    if (!allFieldsFilled(values)) {
      setErrors([{ message: 'Bitte fülle alle Felder aus.' }]);
      return;
    }

    setLoading(true);

    try {
      // Werte in Zahlen umwandeln
      const input = {};
      for (const [key, val] of Object.entries(values)) {
        input[key] = parseFloat(val);
      }

      const data = await calculate('backward', input);
      setResult(data);
    } catch (err) {
      if (err.errors && err.errors.length > 0) {
        setFieldErrors(buildFieldErrors(err.errors));
        const generalErrors = err.errors.filter((e) => !e.field);
        if (generalErrors.length > 0) {
          setErrors(generalErrors);
        }
      } else {
        setErrors([{ message: err.message || 'Verbindung zum Server fehlgeschlagen. Bitte prüfe, ob der Server läuft.' }]);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="page-title">Rückwärtskalkulation</h2>
      <p className="page-description">
        Berechne den Listeneinkaufspreis aus dem Listenverkaufspreis.
      </p>

      {errors.length > 0 && <ErrorDisplay errors={errors} />}

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <InputField label="Listenverkaufspreis" name="listSellingPrice" value={values.listSellingPrice} onChange={handleChange} error={fieldErrors.listSellingPrice} suffix="€" />
          <InputField label="Kundenrabatt" name="customerDiscount" value={values.customerDiscount} onChange={handleChange} error={fieldErrors.customerDiscount} suffix="%" />
          <InputField label="Kundenskonto" name="customerCashDiscount" value={values.customerCashDiscount} onChange={handleChange} error={fieldErrors.customerCashDiscount} suffix="%" />
          <InputField label="Gewinnzuschlag" name="profitSurcharge" value={values.profitSurcharge} onChange={handleChange} error={fieldErrors.profitSurcharge} suffix="%" />
          <InputField label="Handlungskostenzuschlag" name="overheadSurcharge" value={values.overheadSurcharge} onChange={handleChange} error={fieldErrors.overheadSurcharge} suffix="%" />
          <InputField label="Bezugskosten" name="procurementCosts" value={values.procurementCosts} onChange={handleChange} error={fieldErrors.procurementCosts} suffix="€" />
          <InputField label="Liefererskonto" name="supplierCashDiscount" value={values.supplierCashDiscount} onChange={handleChange} error={fieldErrors.supplierCashDiscount} suffix="%" />
          <InputField label="Liefererrabatt" name="supplierDiscount" value={values.supplierDiscount} onChange={handleChange} error={fieldErrors.supplierDiscount} suffix="%" />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn--primary" disabled={loading}>
            {loading ? 'Berechne…' : 'Berechnen'}
          </button>
        </div>
      </form>

      {result && <ResultTable steps={result.steps} />}
    </div>
  );
}

export default BackwardPage;

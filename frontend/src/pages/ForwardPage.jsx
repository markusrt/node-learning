import { useState } from 'react';
import InputField from '../components/InputField.jsx';
import ResultTable from '../components/ResultTable.jsx';
import ErrorDisplay from '../components/ErrorDisplay.jsx';
import calculate from '../api.js';

// Startwerte für das Formular (alle Felder leer)
const INITIAL_VALUES = {
  listPurchasePrice: '',
  supplierDiscount: '',
  supplierCashDiscount: '',
  procurementCosts: '',
  overheadSurcharge: '',
  profitSurcharge: '',
  customerCashDiscount: '',
  customerDiscount: '',
};

// Vorwärtskalkulation-Seite mit Formular und Ergebnis-Tabelle
function ForwardPage() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  // Aktualisiert ein einzelnes Eingabefeld
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  // Sendet die Eingaben an das Backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setResult(null);
    setLoading(true);

    try {
      // Werte in Zahlen umwandeln
      const input = {};
      for (const [key, val] of Object.entries(values)) {
        input[key] = parseFloat(val);
      }

      const data = await calculate('forward', input);
      setResult(data);
    } catch (err) {
      // Fehlermeldungen vom Backend anzeigen
      if (err.errors && err.errors.length > 0) {
        setErrors(err.errors);
      } else {
        setErrors([{ message: err.message || 'Verbindung zum Server fehlgeschlagen. Bitte prüfe, ob der Server läuft.' }]);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="page-title">Vorwärtskalkulation</h2>
      <p className="page-description">
        Berechne den Listenverkaufspreis aus dem Listeneinkaufspreis.
      </p>

      {errors.length > 0 && <ErrorDisplay errors={errors} />}

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <InputField
            label="Listeneinkaufspreis"
            name="listPurchasePrice"
            value={values.listPurchasePrice}
            onChange={handleChange}
            suffix="€"
          />
          <InputField
            label="Liefererrabatt"
            name="supplierDiscount"
            value={values.supplierDiscount}
            onChange={handleChange}
            suffix="%"
          />
          <InputField
            label="Liefererskonto"
            name="supplierCashDiscount"
            value={values.supplierCashDiscount}
            onChange={handleChange}
            suffix="%"
          />
          <InputField
            label="Bezugskosten"
            name="procurementCosts"
            value={values.procurementCosts}
            onChange={handleChange}
            suffix="€"
          />
          <InputField
            label="Handlungskostenzuschlag"
            name="overheadSurcharge"
            value={values.overheadSurcharge}
            onChange={handleChange}
            suffix="%"
          />
          <InputField
            label="Gewinnzuschlag"
            name="profitSurcharge"
            value={values.profitSurcharge}
            onChange={handleChange}
            suffix="%"
          />
          <InputField
            label="Kundenskonto"
            name="customerCashDiscount"
            value={values.customerCashDiscount}
            onChange={handleChange}
            suffix="%"
          />
          <InputField
            label="Kundenrabatt"
            name="customerDiscount"
            value={values.customerDiscount}
            onChange={handleChange}
            suffix="%"
          />
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

export default ForwardPage;

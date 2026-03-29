// Wiederverwendbares Eingabefeld mit Label und Fehlermeldung
function InputField({ label, name, value, onChange, error, suffix }) {
  return (
    <div className="input-field">
      <label className="input-field__label" htmlFor={name}>
        {label}{suffix ? ` (${suffix})` : ''}
      </label>
      <input
        id={name}
        name={name}
        type="number"
        step="any"
        className={`input-field__input ${error ? 'input-field__input--error' : ''}`}
        value={value}
        onChange={onChange}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <span id={`${name}-error`} className="input-field__error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export default InputField;

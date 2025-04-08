export function UIInput({ className1, className3, className2, variant, value, onChange,error, children }) {
  return (
    <div className={className1}>
      <label htmlFor={variant} className={`modal__input-title`}>
        {children}
      </label>
      <div className="modal__input-wrapper input">
        <input
          required
          className={className2}
          data-localstorage
          id={variant}
          placeholder={children}
          value={value}
          onChange={onChange}
        ></input>
        <p className={`${className3} modal__form-error`} data-error={error}>Заполните это поле</p>
      </div>
    </div>
  );
}

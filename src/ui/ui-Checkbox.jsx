export function UICheckbox({ className, variant, onChange, children }) {
  return (
    <div className={className}>
      <label htmlFor={variant} className={`modal__input-title`}>
        {children}
      </label>

      <input
        id="checking"
        type="checkbox"
        data-localstorage
        className="modal__check-button"
        onChange={(e)=>{onChange(e.target.checked)
        }}
      ></input>
    </div>
  );
}

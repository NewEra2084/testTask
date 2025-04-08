export function UICheckbox({
  className,
  variant,
  children
}) {
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
      ></input>
    </div>
  );
}

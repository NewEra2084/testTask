import { Error } from "./error-msg";
export function UIInput({
  className1,
  className2,
  variant,
  children
}) {
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
        ></input>
        <Error>Заполните это поле</Error>
      </div>
    </div>
  );
}

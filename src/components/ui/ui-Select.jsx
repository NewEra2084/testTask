import { Error } from "./error-msg";

export function UISelect({ ref, className, variant, children, error }) {
  return (
    <div className={className}>
      <label htmlFor={variant} className={`modal__input-title`}>
        {children}
      </label>
      <div className="modal__input-wrapper input">
        <select ref={ref} id="group" className="modal__input-field" data-localstorage>
          <option value="Выбрать" disabled selected>
            Выбрать
          </option>
          <option value="Прохожий">Прохожий</option>
          <option>Клиент</option>
          <option>Партнер</option>
        </select>
        <Error error={error}>Заполните это поле</Error>
      </div>
    </div>
  );
}

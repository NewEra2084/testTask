import { CrossIcon } from "../media/cross";
import { UIButton, UICheckbox, UISelect } from "./ui";
import { UIInput } from "./ui";

export function Modal({
  isOpen = false,
  onClose,
  action,
  localStorageWrite,
  index,
  actionName = "Добавить",
}) {
  if (!isOpen) return;

  return (
    <div className="overflow">
      <div className="sans modal__wrapper">
        <form
          className="customerInfo"
          name="customerInfo"
          onSubmit={(e) => {
            e.preventDefault();
            action();
            localStorageWrite(
              document.querySelectorAll("[data-localstorage]"),
              index
            );
            onClose();
          }}
        >
          <UIInput
            required
            className1={"modal__form-input"}
            className2={"transition sans modal__input-field"}
            variant={"modal__name-for"}
          >
            ФИО
          </UIInput>
          <UIInput
            required
            className1={"modal__form-input"}
            className2={"transition sans modal__input-field"}
            variant={"modal__company-for"}
          >
            Компания
          </UIInput>
          <UISelect className={"modal__also"} variant={"modal__group-for"}>
            Группа
          </UISelect>
          <UICheckbox className={"modal__also"} variant={"modal__button-for"}>
            Присутствие
          </UICheckbox>
          <div className="modal__buttons-wrapper">
            <UIButton
              className={"roboto modal__buttons"}
              variant={"green"}
              type={"submit"}
              onClick={() => {
                if (document.getElementById("group")?.value === "Выбрать") {
                  document.getElementById("group").value = "Прохожий"
                }

              }}
            >
              {actionName}
            </UIButton>
            <UIButton
              className={"roboto modal__buttons"}
              variant={"gray"}
              onClick={onClose}
            >
              Закрыть
            </UIButton>
          </div>
        </form>
        <div className={"close-button"} onClick={onClose}>
          <CrossIcon />
        </div>
      </div>
    </div>
  );
}

import { CrossIcon } from "../media/cross";
import { UIButton, UICheckbox, UISelect } from "./ui";
import { UIInput } from "./ui";
import { useRef, useState } from "react";

export function Modal({
  isOpen = false,
  onClose,
  action,
  localStorageWrite,
  index,
  actionName = "Добавить",
}) {
  const selector = useRef(null);
  const [nameInput, setNameInput] = useState("");
  const [companyInput, setCompanyInput] = useState("");
  if (!isOpen) return;

  function namingHandler(e) {
    setNameInput(() => e.target.value);
  }
  function companyNamingHandler(e) {
    setCompanyInput(() => e.target.value);
  }
  function Validate(e) {
    if (nameInput === "") {
      e.preventDefault();
      document.querySelector(".NameError").style.display = "block";
    } else {
      document.querySelector(".NameError").style.display = "none";
    }
    if (companyInput === "") {
      e.preventDefault();
      document.querySelector(".CompanyError").style.display = "block";
    } else {
      document.querySelector(".CompanyError").style.display = "none";
    }
    if (selector.current?.value === "Выбрать") {
      selector.current.value = "Прохожий";
    }
  }
  function Submitting(e) {
    e.preventDefault();
    action();
    localStorageWrite(document.querySelectorAll("[data-localstorage]"), index);
    onClose();
    setNameInput("");
    setCompanyInput("");
  }

  return (
    <div className="overflow">
      <div className="sans modal__wrapper">
        <form
          className="customerInfo"
          name="customerInfo"
          onSubmit={(e) => {
            Submitting(e);
          }}
        >
          <UIInput
            required
            className1={"modal__form-input"}
            className2={"sans modal__input-field"}
            className3={"NameError"}
            variant={"modal__name-for"}
            value={nameInput}
            onChange={(e) => {
              namingHandler(e);
            }}
          >
            ФИО
          </UIInput>
          <UIInput
            required
            className1={"modal__form-input"}
            className2={"sans modal__input-field"}
            className3={"CompanyError"}
            variant={"modal__company-for"}
            value={companyInput}
            onChange={(e) => {
              companyNamingHandler(e);
            }}
          >
            Компания
          </UIInput>
          <UISelect
            ref={selector}
            className={"modal__also"}
            variant={"modal__group-for"}
          >
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
              onClick={(e) => {
                Validate(e);
              }}
            >
              {actionName}
            </UIButton>
            <UIButton
              className={"roboto modal__buttons"}
              variant={"gray"}
              onClick={() => {
                setNameInput("");
                setCompanyInput("");
                onClose();
              }}
            >
              Закрыть
            </UIButton>
          </div>
        </form>
        <div
          className={"close-button"}
          onClick={() => {
            setNameInput("");
            setCompanyInput("");
            onClose();
          }}
        >
          <CrossIcon />
        </div>
      </div>
    </div>
  );
}

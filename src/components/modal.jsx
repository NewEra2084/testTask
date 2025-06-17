import { CrossIcon } from "../media/cross";
import { UIButton, UICheckbox, UISelect } from "../ui";
import { UIInput } from "../ui";
import { useState } from "react";

export function Modal({
  isOpen = false,
  onClose,
  action,
  localStorageWrite,
  index,
  actionName = "Добавить",
}) {
  const [nameInput, setNameInput] = useState("");
  const [companyInput, setCompanyInput] = useState("");
  const [roleInput, setRoleInput] = useState("Прохожий");
  const [checkInput, setCheckInput] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [companyError, setCompanyError] = useState(false);

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
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (companyInput === "") {
      e.preventDefault();
      setCompanyError(true);
    } else {
      setCompanyError(false);
    }
  }
  function Submitting(e) {
    e.preventDefault();
    action();
    localStorageWrite([nameInput, companyInput, roleInput, checkInput], index);
    onClose();
    setNameInput("");
    setCompanyInput("");
    setRoleInput("Прохожий");
    setCheckInput(false);
    setNameError(false);
    setCompanyError(false);
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
            className3={nameError ? "block" : "none"}
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
            className3={companyError ? "block" : "none"}
            variant={"modal__company-for"}
            value={companyInput}
            onChange={(e) => {
              companyNamingHandler(e);
            }}
          >
            Компания
          </UIInput>
          <UISelect
            className={"modal__also"}
            variant={"modal__group-for"}
            onChange={setRoleInput}
          >
            Группа
          </UISelect>
          <UICheckbox
            className={"modal__also"}
            variant={"modal__button-for"}
            onChange={setCheckInput}
          >
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
                onClose();
                setNameInput("");
                setCompanyInput("");
                setRoleInput("Прохожий");
                setCheckInput(false);
                setNameError(false);
                setCompanyError(false);
              }}
            >
              Закрыть
            </UIButton>
          </div>
        </form>
        <div
          className={"close-button"}
          onClick={() => {
            onClose();
            setNameInput("");
            setCompanyInput("");
            setRoleInput("Прохожий");
            setCheckInput(false);
            setNameError(false);
            setCompanyError(false);
          }}
        >
          <CrossIcon />
        </div>
      </div>
    </div>
  );
}

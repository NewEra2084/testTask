import logo from "../media/logo.svg";
import { useState } from "react";
import { UIButton, UISearch } from "./ui";
import Customers from "./customers.jsx";
import { MenuCloseIcon } from "../media/menuClose.jsx";
import { MenuIcon } from "../media/menu.jsx";

export function Header({
  inputText,
  buttonText,
  filterNames,
  filterCompanies,
  filterBoth,
  state,
  tempStr,
  setIsOpen,
  inCount = 0,
  outCount = 0,
}) {
  const [isClicked, setClicked] = useState(false);

  function ChangeHandler(itemForFilter, item) {
    itemForFilter(
      document.querySelector(`#${item}`).value.toLowerCase(),
      state,
      tempStr
    );
  }

  function burgerClickHandle() {
    if (!isClicked) {
      setClicked(true);
      state({ name: "", company: "" });
    }
    if (isClicked) {
      filterBoth(
        [
          document.querySelector("#nameMd").value.toLowerCase(),
          document.querySelector("#companyMd").value.toLowerCase(),
        ],
        state
      );
      setClicked(false);
    }
  }

  return (
    <header className="header-main">
      <img src={logo} alt="Агроном сад" className="header__logo" />

      <div className="header__search">
        <UISearch
          placeholder={inputText}
          onChange={() => ChangeHandler(filterNames, "name")}
          className="sans header__search__input"
          id="name"
        ></UISearch>
        <UISearch
          placeholder={"Поиск по компании"}
          onChange={() => ChangeHandler(filterCompanies, "company")}
          className="sans header__search__input"
          id="company"
        ></UISearch>
        <UIButton
          variant={"header"}
          onClick={() => setIsOpen({ ...setIsOpen, adding: true })}
        >
          {buttonText}
        </UIButton>
      </div>
      {/*Выпадающее меню*/}
      <div className="burger-main">
        <button className="burger__button" onClick={burgerClickHandle}>
          {isClicked ? (
            <MenuCloseIcon className={"burger__close"} />
          ) : (
            <MenuIcon className={"burger__close"} />
          )}
        </button>
        {isClicked && (
          <div className={"burger burger-opened"}>
            <UISearch
              placeholder={inputText}
              onChange={() => ChangeHandler(filterNames, "nameMd")}
              className="sans header__search__input"
              id="nameMd"
            ></UISearch>
            <UISearch
              placeholder={inputText}
              onChange={() => ChangeHandler(filterCompanies, "companyMd")}
              className="sans header__search__input"
              id="companyMd"
            ></UISearch>
            <UIButton
              variant={"header"}
              onClick={() => setIsOpen({ ...setIsOpen, adding: true })}
            >
              {buttonText}
            </UIButton>
          </div>
        )}
      </div>
      <Customers inCount={inCount} outCount={outCount} />
    </header>
  );
}

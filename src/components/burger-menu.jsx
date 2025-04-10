import { MenuCloseIcon } from "../media/menuClose.jsx";
import { MenuIcon } from "../media/menu.jsx";
import { UIButton, UISearch } from "./ui";
import {
  burgerClickHandle,
  ChangeHandler,
  filterCompanies,
  filterNames,
} from "./logic";
import { useState } from "react";

export function Burger({ inputText, buttonText, setIsOpen, state, tempStr }) {
  const [isClicked, setClicked] = useState(false);
  const [filterNamesState, setFilterNamesState] = useState("");
  const [filterCompaniesState, setFilterCompaniesState] = useState("");

  function filterNamingHandler(e) {
    setFilterNamesState(() => e.target.value);
  }
  function filterCompaniesHandler(e) {
    setFilterCompaniesState(() => e.target.value);
  }

  return (
    <div className="burger-main">
      <button
        className="burger__button"
        onClick={() => burgerClickHandle(isClicked, setClicked, state)}
      >
        {isClicked ? (
          <MenuCloseIcon className={"burger__close"} />
        ) : (
          <MenuIcon className={"burger__close"} />
        )}
      </button>
      {isClicked && (
        <div className={"burger burger-opened"}>
          {/* Имя */}
          <UISearch
            value={filterNamesState}
            placeholder={inputText}
            onChange={(e) => {
              filterNamingHandler(e);
              ChangeHandler(filterNames, "nameMd", state, tempStr);
            }}
            className="sans header__search__input"
            id="nameMd"
          ></UISearch>
          {/* Организация */}
          <UISearch
            value={filterCompaniesState}
            placeholder={inputText}
            onChange={(e) => {
              filterCompaniesHandler(e);
              ChangeHandler(filterCompanies, "companyMd", state, tempStr);
            }}
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
  );
}

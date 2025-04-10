import logo from "../media/logo.svg";
import { UIButton, UISearch } from "./ui";
import { Customers } from "./customers.jsx";
import { Burger } from "./burger-menu.jsx";
import { ChangeHandler, filterCompanies, filterNames } from "./logic.js";
import { useState } from "react";

export function Header({
  inputText,
  buttonText,
  state,
  tempStr,
  setIsOpen,
  inCount = 0,
  outCount = 0,
}) {
  const [filterNamesState, setFilterNamesState] = useState("");
  const [filterCompaniesState, setFilterCompaniesState] = useState("");

  function filterNamingHandler(e) {
    setFilterNamesState(() => e.target.value);
  }
  function filterCompaniesHandler(e) {
    setFilterCompaniesState(() => e.target.value);
  }

  return (
    <header className="header-main">
      <img src={logo} alt="Агроном сад" className="header__logo" />
      <div className="header__search">
        <UISearch
          value={filterNamesState}
          placeholder={inputText}
          onChange={(e) => {
            filterNamingHandler(e);
            ChangeHandler(filterNames, "name", state, tempStr);
          }}
          className="sans header__search__input"
          id="name"
        ></UISearch>
        <UISearch
          value={filterCompaniesState}
          placeholder={"Поиск по компании"}
          onChange={(e) => {
            filterCompaniesHandler(e);
            ChangeHandler(filterCompanies, "company", state, tempStr);
          }}
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
      <Burger
        inputText={inputText}
        buttonText={buttonText}
        setIsOpen={setIsOpen}
        state={state}
        tempStr={tempStr}
      ></Burger>
      <Customers inCount={inCount} outCount={outCount} />
    </header>
  );
}

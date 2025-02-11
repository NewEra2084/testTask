import logo from "../media/logo.svg";
import { useState } from "react";
import Customers from "./customers.jsx";

export function Header({
	inputText,
	buttonText,
	filterNames,
	filterCompanies,
	state,
	tempStr,
	setIsOpen,
	inCount = 0,
	outCount = 0,
}) {
	const [isClicked, setClicked] = useState(false);

	function burgerClickHandle() {
		if (!isClicked) {
			setClicked(true);
			state({ name: "", company: "" });
		}
		if (isClicked) {
			setClicked(false);
			filterNames("", state, tempStr);
			filterCompanies("", state, tempStr);
		}
	}

	return (
		<header className="header-main">
			<img src={logo} alt="Агроном сад" className="header__logo" />

			<div className="header__search">
				<input
					type="text"
					placeholder={inputText}
					onChange={() =>
						filterNames(document.querySelector("#name").value, state, tempStr)
					}
					className="sans header__search__input"
					id="name"
				/>
				<input
					type="text"
					placeholder="Поиск по компании"
					onChange={() =>
						filterCompanies(
							document.querySelector("#company").value,
							state,
							tempStr
						)
					}
					className="sans header__search__input"
					id="company"
				/>
				<button
					className="roboto header__search__button"
					onClick={() => setIsOpen({ ...setIsOpen, adding: true })}
				>
					{buttonText}
				</button>
			</div>
			{/*Выпадающее меню*/}
			<div className="burger-main">
				<button className="burger__button" onClick={burgerClickHandle}>
					{isClicked ? (
						<svg
							className="burger__close"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							className="burger__close"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16m-7 6h7"
							/>
						</svg>
					)}
				</button>
				{isClicked && (
					<div className={"burger burger-opened"}>
						<input
							type="text"
							placeholder={inputText}
							onChange={() => {
								filterNames(
									document.querySelector("#nameMd").value,
									state,
									tempStr
								);
							}}
							className="sans header__search__input"
							id="nameMd"
						/>
						<input
							type="text"
							placeholder="Поиск по компании"
							onChange={() =>
								filterCompanies(
									document.querySelector("#companyMd").value,
									state,
									tempStr
								)
							}
							className="sans header__search__input"
							id="companyMd"
						/>
						<button
							className="roboto header__search__button"
							onClick={() => setIsOpen({ ...setIsOpen, adding: true })}
						>
							{buttonText}
						</button>
					</div>
				)}
			</div>
			<Customers inCount={inCount} outCount={outCount}/>
		</header>
	);
}

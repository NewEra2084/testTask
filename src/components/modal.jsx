import { CrossIcon } from "../media/cross";
import { UIButton } from "./ui/ui-Button";

export function Modal({
	isOpen = false,
	onClose,
	action,
	localStorageWrite,
	info="",
	actionName = "Добавить",
}) {
	if (!isOpen) return;
	
	return (
		<div className="overflow">
			<div className="sans modal__wrapper">
				<form className="customerInfo" name="customerInfo">
					
					<div className="modal__form-input">
						<label htmlFor="name" className="modal__input-title">
							ФИО
						</label>
						<input
							required
							className={!info?.name ? "transition sans modal__input-field" : "sans modal__input-field"}
							data-localstorage
							id="name"
							placeholder={info?.name || "ФИО"}
						></input>
					</div>
					<div className="modal__form-input">
						<label htmlFor="company" className="modal__input-title">
							Компания
						</label>
						<input
							required
							id="company"
							className={!info?.name ? "transition sans modal__input-field" : "sans modal__input-field"}
							data-localstorage
							placeholder={info?.company || "Компания"}
						></input>
					</div>
					<div className="modal__also">
						<label htmlFor="group" className="modal__input-title">
							Группа
						</label>
						<select id="group" className="modal__input-field" data-localstorage>
							<option>Прохожий</option>
							<option>Клиент</option>
							<option>Партнер</option>
						</select>
					</div>
					<div className="modal__also">
						<label htmlFor="checking" className="modal__input-title will">
							Присутствие
						</label>
						<input
							id="checking"
							type="checkbox"
							data-localstorage
							className="modal__check-button"
						></input>
					</div>
					<div className="modal__buttons-wrapper">
						<UIButton
							className={"roboto modal__buttons"}
							variant={"green"}
							type={"submit"}
							onClick={() => {
								action();
								localStorageWrite(
									document.querySelectorAll("[data-localstorage]"),
									document.querySelector("[data-localstorage]")
								);
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

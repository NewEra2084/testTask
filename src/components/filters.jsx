import { useState, useRef } from "react";

export function Filters({ Present, Missing, Clear }) {
	const [filtered, setFiltered] = useState(false);

	return (
		<div className={"filters"}>
			<h2 className={"filters__title sans"}>Фильтровать по:</h2>
			<div className="filters__variants">
				<button
					className={filtered ? "with" : "without"}
					onClick={() => {
						Missing();
						setFiltered(() => true);
					}}
				>
					Отсутствующим
				</button>
				<button
					className={filtered ? "with" : "without"}
					onClick={() => {
						Present();
						setFiltered(() => true);
					}}
				>
					Присутствующим
				</button>
				<button
					className={filtered ? "with" : "without"}
					onClick={() => {
						Clear();
						setFiltered(false);
					}}
				>
					Без фильтров
				</button>
			</div>
		</div>
	);
}

import { useState } from "react";
import { UIButton } from "../ui";
import { Missing, Present } from "../logic";

export function Filters({ setCustomers, Clear }) {
  const [filtered, setFiltered] = useState(2);

  return (
    <div className={"filters"}>
      <h2 className={"filters__title sans"}>Фильтровать по:</h2>
      <div className="filters__variants">
        <UIButton
          className={`${filtered === 0 ? "without" : ""} filters__options`}
          onClick={() => {
            Missing(setCustomers);
            setFiltered(0);
          }}
        >
          Отсутствующим
        </UIButton>
        <UIButton
          className={`${filtered === 1 ? "without" : ""} filters__options`}
          onClick={() => {
            Present(setCustomers);
            setFiltered(1);
          }}
        >
          Присутствующим
        </UIButton>
        <UIButton
          className={`${filtered === 2 ? "without" : ""} filters__options`}
          onClick={() => {
            Clear();
            setFiltered(2);
          }}
        >
          Без фильтров
        </UIButton>
      </div>
    </div>
  );
}

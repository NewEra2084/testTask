import { useEffect, useState } from "react";
import { UIButton } from "./ui";
import { Missing, Present } from "./logic";

export function Filters({ setCustomers, Clear }) {
  const [filtered, setFiltered] = useState(2);

  useEffect(() => {
    //выделение кнопки
    const options = document.querySelectorAll(".filters__options");
    options.forEach((element, id) => {
      if (id === filtered) {
        element.classList.add("without");
      } else {
        element.classList.remove("without");
      }
    });
  }, [filtered]);

  return (
    <div className={"filters"}>
      <h2 className={"filters__title sans"}>Фильтровать по:</h2>
      <div className="filters__variants">
        <UIButton
          className={"filters__options"}
          onClick={() => {
            Missing(setCustomers);
            setFiltered(() => 0);
          }}
        >
          Отсутствующим
        </UIButton>
        <UIButton
          className={"filters__options"}
          onClick={() => {
            Present(setCustomers);
            setFiltered(() => 1);
          }}
        >
          Присутствующим
        </UIButton>
        <UIButton
          className={"without filters__options"}
          onClick={() => {
            Clear();
            setFiltered(() => 2);
          }}
        >
          Без фильтров
        </UIButton>
      </div>
    </div>
  );
}

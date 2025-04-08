import { useEffect, useState} from "react";
import { UIButton } from "./ui";

export function Filters({ Present, Missing, Clear }) {
  const [filtered, setFiltered] = useState(2);

  useEffect(()=>{
    const b = document.querySelectorAll(".filters__options");
    b.forEach((element, id) => {
      if(id === filtered){        
        element.classList.add("without");
      }else{
        element.classList.remove("without");
      }      
    });
  },[filtered])

  return (
    <div className={"filters"}>
      <h2 className={"filters__title sans"}>Фильтровать по:</h2>
      <div className="filters__variants">
        
        <button
          className={"filters__options"}
          id="abc"
          onClick={() => {
            Missing();
            setFiltered(()=> 0);
          }}
        >
          Отсутствующим
        </button>
        <button
          className={"filters__options"}
          onClick={() => {
            Present();
            setFiltered(() => 1);
          }}
        >
          Присутствующим
        </button>
        <button
          className={"without filters__options"}
          onClick={() => {
            Clear();
            setFiltered(()=>2);
          }}
        >
          Без фильтров
        </button>
      </div>
    </div>
  );
}

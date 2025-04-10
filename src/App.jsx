import "./styles/css/filters.css";
import "./styles/css/header.css";
import "./styles/css/list.css";
import "./styles/css/modal.css";
import "./styles/css/style.css";

// Мне кажется, что можно сжать количество state(Использовать Reducer или отдельный массив), но я слишком поздно об этом подумал
import { Header, List, Modal, Filters } from "./components";
import { useEffect, useState } from "react";
import { localStorageWrite, updateState, countInOut } from "./components/logic";

function HomePage() {
  const [isOpen, setIsOpen] = useState({ adding: false, replacing: false });
  const [customers, setCustomers] = useState([]);
  const [tempStr, setTempStr] = useState({ name: "", company: "" });
  const [countInOutState, setCountInOut] = useState({ in: "", out: "" });
  const [replaced, setReplaced] = useState("");
  const [cust, setCust] = useState("");
  const [closingUpdate, setclosingUpdate] = useState(0);
  const [customerIndexInList, setCustomerIndexInList] = useState(null);

  useEffect(() => {
    updateState(setCustomers);
    countInOut(setCountInOut);
  }, []);
  useEffect(() => {
    setCust(JSON.parse(localStorage.getItem(replaced)));
  }, [replaced]);
  useEffect(() => {
    updateState(setCustomers);
    countInOut(setCountInOut);
  }, [closingUpdate]);

  return (
    <>
      <Header
        inputText={"Поиск по имени"}
        buttonText={"Добавить"}
        setIsOpen={setIsOpen}
        state={setTempStr}
        tempStr={tempStr}
        inCount={countInOutState.in}
        outCount={countInOutState.out}
      />
      <main className="main">
        <List
          customers={customers}
          str={tempStr}
          setIsOpen={setIsOpen}
          setReplaced={setReplaced}
          isOpen={isOpen}
          setCustomerIndexInList={setCustomerIndexInList}
        />
        <Filters
          setCustomers={setCustomers}
          Clear={() => updateState(setCustomers)}
        />
      </main>
      {isOpen.adding ? (
        <Modal
          isOpen={isOpen.adding}
          onClose={() => setIsOpen({ ...isOpen, adding: false })}
          action={() => {
            updateState(setCustomers);
            setclosingUpdate((st) => st + 1);
          }}
          actionName="Добавить"
          localStorageWrite={localStorageWrite}
        />
      ) : (
        <Modal
          isOpen={isOpen.replacing}
          onClose={() => setIsOpen({ ...isOpen, replacing: false })}
          action={() => {
            setclosingUpdate((st) => st + 1);
          }}
          actionName="Поменять"
          index={customerIndexInList}
          localStorageWrite={localStorageWrite}
          info={cust}
        />
      )}
    </>
  );
}
export default HomePage;

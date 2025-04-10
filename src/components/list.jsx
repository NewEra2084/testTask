import { ListItem } from "./listItem";
import { editCustomer } from "./logic";


export function List({
  customers,
  str,
  setIsOpen,
  setReplaced,
  isOpen,
  setCustomerIndexInList,
}) {
  function listClickHandler(id) {
    editCustomer(id + 1, setIsOpen, setReplaced, isOpen);
    setCustomerIndexInList(id + 1);
  }
  return (
    <div className="sans list">
      <div className="list__title">
        <h5 className="tab1">Номер</h5>
        <h5 className="tab2">ФИО</h5>
        <h5 className="tab3">Компания</h5>
        <h5 className="tab5">Группа</h5>
        <h5 className="tab6">Присутствие</h5>
      </div>
      <hr className="hr" />
      <ul className="list__collection">
        {customers
          .filter(
            (customer) =>
              customer.name.toLowerCase().includes(str.name) &&
              customer.company.toLowerCase().includes(str.company)
          )
          .map((customer, id) => {
            return (
              <ListItem
                className="list__collection__item"
                id={id}
                handler={() => {
                  listClickHandler(id);
                }}
                customer={customer}
              ></ListItem>
            );
          })}
      </ul>
    </div>
  );
}

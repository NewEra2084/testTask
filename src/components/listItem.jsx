export function ListItem({ handler, id, customer }) {
  return (
    <li className="list__collection__item" key={id} onClick={handler}>
      <h2 className="tab1">{id + 1}</h2>
      <h2 className="tab2 truncate">{customer.name}</h2>
      <h2 className="tab3 truncate">{customer.company}</h2>
      <h2 className="tab4">{customer.role}</h2>
      {customer.has ? (
        <div className="tab7 tab6"></div>
      ) : (
        <div className="tab8 tab6"></div>
      )}
    </li>
  );
}

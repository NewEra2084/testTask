export function Customers({ inCount, outCount }) {
  return (
    <div className="header__customers">
      <h3 className="header__customers__text sans">Посетители</h3>
      <span className="header__customers__count-green roboto">
        {inCount}
      </span> /{" "}
      <span className="header__customers__count-red roboto">{outCount}</span>
    </div>
  );
}

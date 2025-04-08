export function  UISearch({search, inputText}) {
    return ( 
        <input
          type="text"
          placeholder={inputText}
          onChange={() =>
            search()
          }
          className="sans header__search__input"
          id="name"
        />
     );
}
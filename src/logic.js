//Я вынес сюда логику из компонентов

function localStorageWrite(values, index) {
  const obj = {};
  values.forEach((item, id) => {
    obj[
      id === 0
        ? "name"
        : id === 1
        ? "company"
        : id === 2
        ? "role"
        : "has"
    ] = item;
  });
  const lines = localStorage.getItem("lines");
  if (lines == null) {
    localStorage.setItem("lines", JSON.stringify({}));
  }
  const linesParsed = JSON.parse(lines);
  const id = Object?.keys(linesParsed).length;
  if (!index) {
    linesParsed[id + 1] = obj;
  } else {
    linesParsed[index] = obj;
  }
  localStorage.setItem("lines", JSON.stringify(linesParsed));
}

function localStorageRead() {
  let values = [];
  const lines = localStorage.getItem("lines");
  if (lines == null) return [];
  const linesParsed = JSON.parse(lines);
  for (let item of Object.values(linesParsed)) {
    values.push(item);
  }
  return values;
}

function ChangeHandler(itemForFilter, item, state, tempStr) {
  itemForFilter(item, state, tempStr);
}

function burgerClickHandle(isClicked, setClicked) {
  if (!isClicked) {
    setClicked(true);
  }
  if (isClicked) {
    setClicked(false);
  }
}

function updateState(set) {
  const values = localStorageRead();
  set(values);
}
function Present(set) {
  set(localStorageRead().filter((customer) => customer.has));
}
function Missing(set) {
  set(localStorageRead().filter((customer) => !customer.has));
}
function filterNames(value, set, tempStr) {
  set({ ...tempStr, name: value });
}
function filterCompanies(value, set, tempStr) {
  set({ ...tempStr, company: value });
}
function editCustomer(name, setIsOpen, setReplaced, isOpen) {
  setIsOpen({ ...isOpen, replacing: true });
  setReplaced(name.toString());
}
function countInOut(set) {
  set({
    out: localStorageRead().filter((customer) => !customer.has).length,
    in: localStorageRead().filter((customer) => customer.has).length,
  });
}

export {
  localStorageWrite,
  localStorageRead,
  updateState,
  Present,
  Missing,
  filterCompanies,
  filterNames,
  editCustomer,
  countInOut,
  ChangeHandler,
  burgerClickHandle,
};

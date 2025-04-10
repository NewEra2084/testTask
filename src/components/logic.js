function localStorageWrite(values, index) {
  const obj = {};
  let checkbox = values[3].checked;
  values.forEach((item, id) => {
    obj[id === 0 ? "name" : id === 1 ? "company" : id === 2 ? "role" : "has"] =
      id === 3 ? checkbox : item.value;
  });

  const id = localStorage.length;
  localStorage.setItem(`${index ? index : id + 1}`, JSON.stringify(obj));
}

function localStorageRead() {
  let values = [];
  for (let i = 1; i <= localStorage.length; i++) {
    try {
      values.push(JSON.parse(localStorage.getItem(i)));
    } catch (error) {
      console.log(error.name + ": " + error.message);
    }
  }
  return values;
}

function ChangeHandler(itemForFilter, item, state, tempStr) {
  itemForFilter(
    document.querySelector(`#${item}`).value.toLowerCase(),
    state,
    tempStr
  );
}
function burgerClickHandle(isClicked,setClicked,state) {
    if (!isClicked) {
      setClicked(true);
    }
    if (isClicked) {
      filterBoth(
        [
          document.querySelector("#nameMd").value.toLowerCase(),
          document.querySelector("#companyMd").value.toLowerCase(),
        ],
        state
      );
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
function filterBoth(value, set) {
  set({ name: value[0], company: value[1] });
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
  filterBoth,
  ChangeHandler,
  burgerClickHandle
};

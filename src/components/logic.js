function localStorageWrite(values, name) {
	const obj = {};
	let checkbox = values[3].checked;
	values.forEach((item, id) => {
		obj[
				id == 0 ? "name" : 
				(id == 1 ? "company" : 
				(id == 2 ? "role" : "has"))
		] = id === 3 ? checkbox : item.value;
	});
	localStorage.setItem(`${name.value}`, JSON.stringify(obj));
}

function localStorageRead() {
	let values = [];
	let count = 0;
	for (let i = 0; i < localStorage.length; i++) {
		let key = localStorage.key(i);
		try {
			if (!JSON.parse(localStorage.getItem(key))["name"]) continue;
			values.push(JSON.parse(localStorage.getItem(key)));
		} catch (error) {
			console.log(error.name + ": " + error.message	);
		}finally{
			count++;
		}
	}

	return values;
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
function filterNames(value,set, tempStr) {
	set({ ...tempStr, name: value });
}
function filterCompanies(value, set, tempStr) {
	set({ ...tempStr, company: value });
}
function editCustomer(name,setIsOpen, setReplaced,isOpen) {
	setIsOpen({ ...isOpen, replacing: true });
	setReplaced(name);
}
function countInOut(set) {
	set({
		out: localStorageRead().filter((customer) => !customer.has).length,
		in: localStorageRead().filter((customer) => customer.has).length
	});
}
function replaceCustomer(name) {
	localStorage.removeItem(name);
}

export { localStorageWrite, localStorageRead, updateState, Present, Missing,filterCompanies, filterNames,editCustomer,replaceCustomer, countInOut};

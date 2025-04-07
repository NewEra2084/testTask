function localStorageWrite(values,index) {
	const obj = {};
	let checkbox = values[3].checked;
	values.forEach((item, id) => {
		obj[
				id === 0 ? "name" : 
				(id === 1 ? "company" : 
				(id === 2 ? "role" : "has"))
		] = id === 3 ? checkbox : item.value;
	});
	
	const id = localStorage.length
	localStorage.setItem(`${index ? index : id + 1}`, JSON.stringify(obj));
}

function localStorageRead() {
	let values = [];
	for (let i = 1; i <= localStorage.length; i++) {
		// let key = localStorage.key(i);
		try {
			values.push(JSON.parse(localStorage.getItem(i)));
		} catch (error) {
			console.log(error.name + ": " + error.message	);
		}
	}
	console.log(values);
	
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
	setReplaced(name.toString());
} //!
function countInOut(set) {
	set({
		out: localStorageRead().filter((customer) => !customer.has).length,
		in: localStorageRead().filter((customer) => customer.has).length
	});
}

export { localStorageWrite, localStorageRead, updateState, Present, Missing,filterCompanies, filterNames,editCustomer, countInOut};

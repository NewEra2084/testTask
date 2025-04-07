export function List({
	customers,
	str,
	editCustomer,
	setIsOpen,
	setReplaced,
	isOpen,
	setCustomerIndexInList
}) {
	return (
		<div className="sans list">
			<div className="list__title">
				<h5 className="tab1">Номер</h5>
				<h5 className="tab2">ФИО</h5>
				<h5 className="tab3">Компания</h5>
				<h5 className="tab5">Группа</h5>
				<h5 className="tab6">Присутствие</h5>
			</div>
			<hr className="hr"/>
			<ul className="list__collection">
				{customers
					.filter(
						(customer) =>
							customer.name.includes(str.name) &&
							customer.company.includes(str.company)
					)
					.map((customer, id) => {
						return (
							<li
								className="list__collection__item"
								key={id}
								onClick={() =>{
									editCustomer(id+1, setIsOpen, setReplaced, isOpen);
									setCustomerIndexInList(id+1);
								}
								}
							>
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
					})}
			</ul>
		</div>
	);
}

export function UIButton({className, variant, type = "button", onSubmit, onClick, children}) {
  const buttonColors = 
    {
      "green": `ui-green ${className}`,
      "gray": `ui-gray ${className}`
    }[variant]
	return (
		<button
			className={buttonColors}
      type={type}
      onSubmit={onSubmit}
      onClick={onClick}
		>
			{children}
		</button>
	);
}

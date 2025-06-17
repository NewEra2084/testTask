export function UISearch({ value, placeholder, onChange, className, id }) {
  return (
    <input
      value={value}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      className={className}
      id={id}
    />
  );
}

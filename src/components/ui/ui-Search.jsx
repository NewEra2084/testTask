export function UISearch({ placeholder, onChange, className, id }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      className={className}
      id={id}
    />
  );
}

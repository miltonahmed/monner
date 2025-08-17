
const Input = ({
  type = 'text',
  placeholder = '',
  className = '',
  name = '',
  value,
  id,
  onChange,
}) => {
  return (
    <input
      value={value}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  );
};

export default Input
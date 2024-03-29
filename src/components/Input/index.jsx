import { InputWrapper } from '../../global';

// eslint-disable-next-line no-unused-vars
export function Input({
  text,
  type,
  handler,
  value,
  field,
  span,
  placeholder,
  small,
}) {
  const name = field.charAt(0).toLowerCase() + field.slice(1);

  return (
    <InputWrapper>
      <label htmlFor={`input${field}`}>
        {text}
        <small>{small}</small>
      </label>
      <input
        id={`input${field}`}
        type={type}
        name={name}
        onChange={handler}
        value={value}
        maxLength={25}
        placeholder={placeholder}
      />
      <span>{span}</span>
    </InputWrapper>
  );
}

export default Input;

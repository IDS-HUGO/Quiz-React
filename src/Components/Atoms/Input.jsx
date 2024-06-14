import styled from 'styled-components';
const InputEstilizado = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
`;

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <InputEstilizado
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;

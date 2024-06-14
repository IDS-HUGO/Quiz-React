import styled from 'styled-components';
const BotonEstilizado = styled.button`
  margin-left: 45%;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const Button = ({ children, onClick }) => {
  return (
    <BotonEstilizado onClick={onClick}>
      {children}
    </BotonEstilizado>
  );
};

export default Button;

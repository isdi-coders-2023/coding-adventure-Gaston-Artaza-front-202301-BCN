import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: #cccf18;
  width: 323px;
  height: 40px;
  border-radius: 10px;
  font-size: 20px;
  color: #1e1e1e;
  font-family: "Saira Stencil One";
  font-weight: 400;

  :disabled {
    opacity: 0.57;
  }

  @media (min-width: 420px) {
    height: 57px;
  }
`;

export default ButtonStyled;

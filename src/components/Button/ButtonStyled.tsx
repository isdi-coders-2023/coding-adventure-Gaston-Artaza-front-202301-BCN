import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: var(--primary-color);
  font-family: var(--main-font);
  width: 323px;
  height: 40px;
  border-radius: 10px;
  font-size: 20px;
  color: var(--primary-font-color);

  font-weight: 400;

  :disabled {
    opacity: 0.57;
  }

  @media (min-width: 420px) {
    height: 57px;
  }
`;

export default ButtonStyled;

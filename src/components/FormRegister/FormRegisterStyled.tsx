import styled from "styled-components";

const FormRegisterStyled = styled.form`
  font-family: var(--font-form);
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 48px;
  justify-content: center;
  align-items: center;

  label {
    display: flex;
    flex-direction: column;
    font-weight: 700;
    color: var(--main-form-color);
  }

  input {
    border-radius: 8px;
    height: 40px;
    width: 325px;
    border: 1px solid var(--main-form-color);
    background-color: var(--bg-input-color);
    margin-top: 9px;
    padding: 11px;
  }

  input::placeholder {
    color: var(--primary-font-color);
    font-size: 1rem;
  }

  @media (min-width: 987px) {
    input {
      width: 832px;
      height: 56px;
    }
  }
`;

export default FormRegisterStyled;

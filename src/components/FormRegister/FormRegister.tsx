import React from "react";
import Button from "../Button/Button";
import FormRegisterStyled from "./FormRegisterStyled";

const FormRegister = (): JSX.Element => {
  return (
    <FormRegisterStyled>
      <label htmlFor="email">
        {" "}
        Email
        <input
          type="text"
          id="email"
          placeholder=" Introduce your email"
          required
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          id="password"
          placeholder=" Introduce your password"
          required
        />
      </label>
      <label htmlFor="image">
        Image
        <input
          type="file"
          id="image"
          placeholder=" Introduce an image"
          required
        />
      </label>
      <Button text={"Sign up"} />
    </FormRegisterStyled>
  );
};

export default FormRegister;

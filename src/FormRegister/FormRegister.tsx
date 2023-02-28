import React from "react";

const FormRegister = () => {
  return (
    <form>
      <label htmlFor="email"> Email</label>
      <input
        type="text"
        id="email"
        placeholder=" Introduce your email"
        required
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder=" Introduce your password"
        required
      />
      <label htmlFor="image"> Image </label>
      <input
        type="file"
        id="image"
        placeholder=" Introduce an image"
        required
      />
      <button>Sign up</button>
    </form>
  );
};

export default FormRegister;

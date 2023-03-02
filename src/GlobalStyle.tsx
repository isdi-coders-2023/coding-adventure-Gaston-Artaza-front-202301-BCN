import { createGlobalStyle } from "styled-components";
import "@fontsource/saira-stencil-one";
import "@fontsource/roboto";

export const GlobalStyle = createGlobalStyle`

:root {
  --main-font: "Saira Stencil One";
  --primary-color: #cccf18;
  --primary-font-color : #1e1e1e;
  --font-form:"Roboto";
  --bg-input-color:#e8e8e8;
  --main-form-color:#fff
}

*,
*::after,
*::before{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

input, button, textarea, select {
  font-family: inherit;
}

input,button{
  border:none
}

body {
  margin: 0;
  padding: 18px;
  background-color: #1E1E1E;
  min-height: 100vh;
}

li {
  list-style: none;
}

button {
  cursor: pointer;

}




`;

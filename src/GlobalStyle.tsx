import { createGlobalStyle } from "styled-components";
import "@fontsource/saira-stencil-one";

export const GlobalStyle = createGlobalStyle`

input, button, textarea, select {
  font: inherit;
}

body {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

button {
  cursor: pointer;
  border: none;
}

:root {
  --main-font: "Saira Stencil One";
  --primary-color: #cccf18;
  --primary-font-color : #1e1e1e
}


`;

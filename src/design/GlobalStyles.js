import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
*,
*::after,
*::before {
    margin:0;
    padding:0;
    box-sizing:border-box;

}

html {
    font-size:62.5%;
}

body {
    background-color:${({ theme }) => theme.colors.alabaster};
    font-weight:500;
    line-height:1.5;
    letter-spacing:-0.25px;
    color:${({ theme }) => theme.colors.vulcan};
    font-family: ${({ theme }) => theme.fonts.spartan};
    transition:.3s background;


}

input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type=number] {
  -moz-appearance: textfield;
}

fieldset {
  border: 0;
  padding: 0;
  margin: 0;
  min-width: 0;
}

button {
  background:transparent;
  border:none;
  cursor:pointer;
  font-family:inherit;
  text-align:inherit;
  color:inherit;
}
`;

export default globalStyle;

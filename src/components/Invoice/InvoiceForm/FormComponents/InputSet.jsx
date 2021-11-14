import styled from "styled-components";
import { ErrorStyles, Input } from "../FormStyles/SharedFormStyles";
import { ErrorMessage } from "formik";
import { StandardTextSizing } from "../../../shared/SharedStyles";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  ${StandardTextSizing}
  color: ${({ theme, error }) =>
    error ? theme.colors.burntSienna : theme.colors.shipCove};
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Error = styled.p`
  ${ErrorStyles}
  @media screen and (max-width: 350px) {
    font-size: 8px;
  }
`;

const InputSet = ({
  labelText,
  type = "text",
  name,
  children,
  error,
  ...props
}) => {
  return (
    <InputWrapper>
      <Label error={error} htmlFor={name}>
        {labelText}
        <ErrorMessage name={name} component={Error} />
      </Label>
      {children ? (
        children
      ) : (
        <Input error={error} id={name} type={type} name={name} {...props} />
      )}
    </InputWrapper>
  );
};

export default InputSet;

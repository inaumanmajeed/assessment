import React from "react";
import { CustomInputMainContainer } from "./styles";

const CustomInput = ({
  field,
  form,
  isEditable = false,
  type = "text",
  label,
  placeholder,
  width,
  noMargin,
  ...props
}) => {
  const hasError = form && form.errors && form.errors[field.name];
  const isTouched = form && form.touched && form.touched[field.name];

  return (
    <CustomInputMainContainer noMargin width={width}>
      {label && <label>{label}</label>}
      <input
        disabled={isEditable}
        {...field}
        type={type}
        placeholder={placeholder}
        {...props}
      />
      {hasError && isTouched && <div className="error">{hasError}</div>}
    </CustomInputMainContainer>
  );
};

export default CustomInput;

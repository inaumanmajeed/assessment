import { Field } from "formik";
import React from "react";
import CustomInput from "../shared/Input";

const ForgetPasswordComponent = () => {
  return (
    <>
      <Field
        type="email"
        name="email"
        placeholder="Email"
        component={CustomInput}
      />
    </>
  );
};

export default ForgetPasswordComponent;

import { Field } from "formik";
import React from "react";
import CustomInput from "../shared/Input";

const LoginComponent = () => {
  return (
    <>
      <Field
        type="email"
        name="email"
        placeholder="Email"
        component={CustomInput}
      />
      <Field
        type="password"
        name="password"
        placeholder="Password"
        component={CustomInput}
      />
    </>
  );
};

export default LoginComponent;

import AuthLayout from "app/layout/auth/AuthLayout";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import { validationSchema } from "app/utils/Validations";
import CustomButton from "app/components/shared/CustomButton";
import LoginComponent from "app/components/auth/LoginComponent";
import { authLogin } from "app/firebase/index";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { email, password } = values;

    try {
      // Send data to the backend
      await signInWithEmailAndPassword(authLogin, email, password);
      console.log("User signed in successfully");

      setIsSubmitted(true);
      toast.success("User signed in successfully");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error signing in:", error);
      toast.error("Invalid email or password");
    }
  };

  return (
    <AuthLayout login title={"Login"}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form className="form__main">
            <LoginComponent />
            <CustomButton
              title={isSubmitted ? "LoggedIn" : "Login"}
              type="submit"
              BtnCenter
              disabled={isSubmitted}
            />
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default Login;

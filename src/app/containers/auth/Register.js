import AuthLayout from "app/layout/auth/AuthLayout";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import { validationSchema } from "app/utils/Validations";
import CustomButton from "app/components/shared/CustomButton";
import LoginComponent from "app/components/auth/LoginComponent";
import { authLogin } from "app/firebase/index";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialValues = {
  email: "",
  password: "",
};

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { email, password } = values;

    try {
      // Send data to the backend
      await createUserWithEmailAndPassword(authLogin, email, password);
      setIsSignedUp(true);
      console.log("User signed up successfully");
      setIsSubmitted(true);
      toast.success("User signed up successfully");
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error("Error creating account");
      setIsSignedUp(false);
    }
  };

  if (isSignedUp) {
    navigate("/login");
  }

  return (
    <AuthLayout register title={"register"}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form className="form__main">
            <LoginComponent />
            <CustomButton
              title={isSubmitted ? "Signed Up" : "register"}
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

export default Register;

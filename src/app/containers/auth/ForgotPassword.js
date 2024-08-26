import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import AuthLayout from "app/layout/auth/AuthLayout";
import { validationSchemaEmail } from "app/utils/Validations";
import CustomButton from "app/components/shared/CustomButton";
import ForgetPasswordComponent from "app/components/auth/ForgetPassword";
import { authLogin } from "app/firebase/index";

const initialValues = {
  email: "",
};

const ForgetPassword = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (values, { setSubmitting }) => {
    const { email } = values;
    console.log("🚀 ~ onSubmit ~ email:", email);

    try {
      // Send password reset email
      await sendPasswordResetEmail(authLogin, email);
      console.log("Password reset email sent successfully");

      setIsSubmitted(true);
      toast.success(
        "Password reset email sent successfully. Please check your inbox."
      );
      navigate("/login");
    } catch (error) {
      console.error("Error sending password reset email:", error);
      toast.error("Error sending password reset email. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthLayout reset title={"Forget Password"}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchemaEmail}
      >
        {({ isSubmitting }) => (
          <Form className="form__main">
            <ForgetPasswordComponent />
            <CustomButton
              title={isSubmitted ? "Email Sent" : "Reset"}
              type="submit"
              BtnCenter
              disabled={isSubmitted || isSubmitting}
            />
          </Form>
        )}
      </Formik>
     
    </AuthLayout>
  );
};

export default ForgetPassword;

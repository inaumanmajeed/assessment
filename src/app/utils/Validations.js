import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().min(6, "At least 6 characters").required("Required"),
});


const validationSchemaEmail = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
});

export { validationSchema, validationSchemaEmail };

import { styled } from "@mui/material/styles";

const AuthLayoutContainer = styled("div")(({ theme }) => ({
  width: "100vw",
  height: "100dvh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& .form__main": {
    width: "100%",
  },
}));

const AuthInputContainer = styled("div")(({ theme }) => ({
  width: "calc(40% - 40px)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "calc(80% - 40px)",
  padding: "20px",
  borderRadius: "10px",
  background: "rgb(255 255 255 / 11%)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
}));

const InputForm = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const GapDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: "90%",
  borderRadius: "10px",
  padding: "20px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  "& .children__input": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%",
    "& h1": {
      color: "#fff",
      fontSize: "2rem",
      fontWeight: "600",
      width: "100%",
      textAlign: "center",
    },
  },
}));

export { AuthLayoutContainer, AuthInputContainer, InputForm, GapDiv };

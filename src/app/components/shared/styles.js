import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomInputMainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  width: "100%",
  position: "relative",
  marginBottom: "12px",

  "& label": {
    fontSize: "14px",
    fontWeight: "400",
    color: "#49759C",
  },
  "& input": {
    padding: "8px",
    fontSize: "1rem",
    backgroundColor: "#eeeeee",
    border: "1px solid transparent",
    outline: "none",
    marginBottom: "6px",
    "&::placeholder": {
      color: "#6C757D80",
      fontSize: "12px",
    },
  },
  "& .error": {
    fontSize: "11px",
    color: "#d90429",
    fontWeight: "500",
    position: "absolute",
    bottom: "-12px",
    zIndex: "1",
  },
}));

const CustomBTN = styled(Button)(({ theme }) => ({
  height: "28px",
  minWidth: "120px",
  padding: "8px",
  borderRadius: "4px",
  backgroundColor: "#407bff",
  color: "#fff",
  fontWeight: "500",
  "&:hover": {
    backgroundColor: "#5388ff",
  },
}));

const BTNcenter = styled("div")(({ theme, BtnCenter }) => ({
  display: BtnCenter ? "flex" : "block",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: "16px",
}));

const ErrorMsg = styled("div")(({ theme }) => ({
  fontSize: "11px",
  color: "#DDDDDDDD",
  fontWeight: "500",
  textAlign: "center",
  marginTop: "8px",
}));

const LogoWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  "& img": {
    width: "35px",
  },
}));

export {
  CustomInputMainContainer,
  CustomBTN,
  BTNcenter,
  ErrorMsg,
  LogoWrapper,
};

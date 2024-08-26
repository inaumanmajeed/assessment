import { styled } from "@mui/material/styles";

const NavigateLinks = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: theme.spacing(2),
  fontSize: "0.775rem",
  width: "100%",
  "& span": {
    color: "#fff",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export { NavigateLinks };

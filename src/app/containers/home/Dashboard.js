import ThoughtsBookMainComponent from "app/components/todo/TodoCardMain";
import React from "react";
import { styled } from "@mui/material/styles";

const HomeContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
}));

const Dashboard = () => {
  return (
    <>
      <HomeContainer>
        <ThoughtsBookMainComponent />
      </HomeContainer>
    </>
  );
};

export default Dashboard;

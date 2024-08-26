import React from "react";
import { DasboardLayoutContainer } from "./styles";
import MiniSidebar from "app/components/home/MiniSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <DasboardLayoutContainer>
          <MiniSidebar />
      {children}
    </DasboardLayoutContainer>
  );
};

export default DashboardLayout;

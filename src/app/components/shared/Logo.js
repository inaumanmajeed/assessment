import React from "react";
import LogoIcon from "app/assets/images/dashboard/Logo.svg";
import { LogoWrapper } from "./styles";

const Logo = () => {
  return (
    <LogoWrapper>
      <img src={LogoIcon} alt="Logo" />
    </LogoWrapper>
  );
};

export default Logo;

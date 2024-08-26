import React from "react";
import { CustomBTN, BTNcenter } from "./styles";

const CustomButton = ({
  title = "submit",
  onClick,
  type = "button",
  disabled = false,
    className,
  BtnCenter = false,
  ...props
}) => {
    return (
      <BTNcenter BtnCenter={BtnCenter}>
        <CustomBTN
          onClick={onClick}
          type={type}
          disabled={disabled}
          className={className}
          {...props}
        >
          {title}
        </CustomBTN>
      </BTNcenter>
    );
};

export default CustomButton;

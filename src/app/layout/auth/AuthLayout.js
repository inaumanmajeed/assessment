import React from "react";
import {
  AuthLayoutContainer,
  AuthInputContainer,
  InputForm,
  GapDiv,
} from "./styles";

import { NavigateLinks } from "app/assets/css/commonStyles";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ children, title, login, register, reset }) => {
  const navigate = useNavigate();

  return (
    <AuthLayoutContainer>
      <AuthInputContainer>
        <InputForm>
          <GapDiv>
            <div className="children__input">
              <h1>{title}</h1>
              {children}
            </div>
            {login && (
              <NavigateLinks>
                <span onClick={() => navigate("/reset")}>Having Trouble?</span>
                <span onClick={() => navigate("/register")}>Register</span>
              </NavigateLinks>
            )}
            {register && (
              <NavigateLinks>
                <span onClick={() => navigate("/reset")}>Having Trouble?</span>
                <span onClick={() => navigate("/")}>Login</span>
              </NavigateLinks>
            )}
            {reset && (
              <NavigateLinks>
                <span onClick={() => navigate("/")}>Login</span>
                <span onClick={() => navigate("/register")}>Register</span>
              </NavigateLinks>
            )}
          </GapDiv>
        </InputForm>
      </AuthInputContainer>
    </AuthLayoutContainer>
  );
};

export default AuthLayout;

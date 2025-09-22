import React from "react";
import LoginContainer from "../components/LoginContainer";
import SystemInfo from "../components/SystemInfo";
import "../styles/login.css";

const LoginPage = () => (
  <div>
    <LoginContainer />
    <SystemInfo />
  </div>
);

export default LoginPage;
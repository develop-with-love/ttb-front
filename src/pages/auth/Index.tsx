import React from "react";
import { Outlet } from "react-router-dom";
import "./auth.css";
import AppTitle from "../../components/AppTitle";

const AuthIndex: React.FC = () => {
  return (
    <div className="auth-background">
      <div className="auth-container">
        <AppTitle className="auth-title" />
        <Outlet />
      </div>
    </div>
  );
};

export default AuthIndex;

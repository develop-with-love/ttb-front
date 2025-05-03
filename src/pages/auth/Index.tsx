import React from "react";
import { Outlet } from "react-router-dom";
import "./auth.css";

const AuthIndex: React.FC = () => {
  return (
    <div className="auth-background">
      <div className="auth-container">
        <div>
          <h2 className="auth-title">Tekville Task Board</h2>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthIndex;

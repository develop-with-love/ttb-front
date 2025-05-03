import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import AuthIndex from "./pages/auth/Index";
import Login from "./pages/auth/Login";
import VerifyCode from "./pages/auth/VerifyCode";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthIndex />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<Login />} />
          <Route path="verify-code" element={<VerifyCode />} />
          {/* <Route path="register" element={<Register />} /> 등 추가 가능 */}
          {/* /auth로 접근 시 기본으로 Login */}
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

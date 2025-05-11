import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./styles/common.css";
import AuthIndex from "./pages/auth/Index";
import Login from "./pages/auth/Login";
import VerifyCode from "./pages/auth/VerifyCode";
import MainIndex from "./pages/main/Index";
import Home from "./pages/main/home";
import ProjectDetail from "./pages/main/Project/Detail";
import ProjectList from "./pages/main/Project/List";
import RoadMap from "./pages/main/Project/RoadMap";
import Issues from "./pages/main/Project/Issues";
import Release from "./pages/main/Project/Release";
import Backlog from "./pages/main/Project/Backlog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthIndex />}>
          <Route path="" element={<Login />} />
          <Route path="verify-code" element={<VerifyCode />} />
          {/* <Route path="register" element={<Register />} /> 등 추가 가능 */}
          {/* /auth로 접근 시 기본으로 Login */}
        </Route>
        <Route path="/" element={<MainIndex />}>
          <Route path="home" element={<Home />} />
          <Route path="projects" element={<ProjectList />} />
          <Route path="projects/:id" element={<ProjectDetail />}>
            <Route index element={<Navigate to="roadmap" replace />} />
            <Route path="roadmap" element={<RoadMap />} />
            <Route path="issues" element={<Issues />} />
            <Route path="release" element={<Release />} />
            <Route path="backlog" element={<Backlog />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

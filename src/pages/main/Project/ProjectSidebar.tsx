import React from "react";
import "./Project.css";
import { useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { label: "Roadmap", path: "roadmap" },
  { label: "Issues", path: "issues" },
  { label: "Release", path: "release" },
  { label: "Backlog", path: "backlog" },
  { label: "Setting", path: "setting", bottom: true },
];

const ProjectSidebar: React.FC<{ name: string }> = ({ name }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="project-sidebar-root">
      <div className="project-sidebar-project-name">
        <div className="project-sidebar-project-icon" />
        <span>{name}</span>
      </div>
      <div className="project-sidebar-menu-list">
        {menuItems.map((item) => {
          // 현재 경로가 해당 메뉴의 path로 끝나면 active
          const isActive = location.pathname.endsWith(item.path);
          return (
            <div
              key={item.label}
              className={`project-sidebar-menu-item${
                isActive ? " active" : ""
              }${item.bottom ? " bottom" : ""}`}
              onClick={() => navigate(item.path)}
              style={{ cursor: "pointer" }}
            >
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectSidebar;

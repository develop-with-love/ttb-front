import React from "react";
import "./Project.css";
import { useLocation, useNavigate } from "react-router-dom";
import squareLeft from "../../../assets/SquareLeft.png";

const menuItems = [
  { label: "Roadmap", path: "roadmap" },
  { label: "Issues", path: "issues" },
  { label: "Release", path: "release" },
  { label: "Backlog", path: "backlog" },
  { label: "Setting", path: "setting", bottom: true },
];

const ProjectOpenSidebar: React.FC<{
  name: string;
  onToggleSidebar: () => void;
}> = ({ name, onToggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="project-sidebar-root">
      <div className="project-sidebar-project-name">
        <div className="project-sidebar-project-icon" />
        <span>{name}</span>
      </div>
      <div
        className="project-sidebar-menu-list"
        style={{ position: "relative" }}
      >
        <button
          type="button"
          className="sidebar-arrow-btn"
          style={{
            position: "absolute",
            top: "-18px",
            right: "-17px",
            cursor: "pointer",
            zIndex: 2,
          }}
          onClick={onToggleSidebar}
        >
          <img
            src={squareLeft}
            alt="사이드바 토글"
            style={{ width: 34, height: 34 }}
          />
        </button>
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

export default ProjectOpenSidebar;

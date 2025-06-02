import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import AppTitle from "../components/AppTitle";
import Modal from "../pages/components/Modal";
import CreateModal from "./CreateModal";
import { useState } from "react";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    alert("submit");
    handleModalClose();
  };

  return (
    <>
      <header className="header-root">
        <div className="header-left">
          <NavLink to="/home" style={{ textDecoration: "none" }}>
            <AppTitle className="header-title" />
          </NavLink>
          <nav className="header-nav">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                "header-link" + (isActive ? " active" : "")
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/dashboards"
              className={({ isActive }) =>
                "header-link" + (isActive ? " active" : "")
              }
            >
              Dashboards
            </NavLink>
            <NavLink
              to="/filters"
              className={({ isActive }) =>
                "header-link" + (isActive ? " active" : "")
              }
            >
              Filters
            </NavLink>
          </nav>
          <button className="header-create" onClick={handleModalOpen}>
            Create
          </button>
        </div>
        <div className="header-right">
          <input className="header-search" placeholder="검색어를 입력하세요" />
          <span className="header-bell" role="img" aria-label="bell">
            🔔
          </span>
          <span className="header-profile"></span>
        </div>
      </header>
      <Modal open={isModalOpen} onClose={handleModalClose}>
        <CreateModal onCancel={handleModalClose} category="" />
      </Modal>
    </>
  );
};

export default Header;

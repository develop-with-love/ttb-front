import { useState } from "react";
import ProjectOpenSidebar from "./ProjectOpenSidebar";
import ProjectColesSidebar from "./ProjectColesSidebar";
import { Outlet, useParams } from "react-router-dom";

const ProjectDetail: React.FC = () => {
  const { id } = useParams();

  const res = {
    // id 로 데이터 가져오기
    name: "Project 1",
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="project-detail-root">
      {isSidebarOpen && (
        <ProjectOpenSidebar name={res.name} onToggleSidebar={toggleSidebar} />
      )}
      {!isSidebarOpen && (
        <ProjectColesSidebar onToggleSidebar={toggleSidebar} />
      )}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ProjectDetail;

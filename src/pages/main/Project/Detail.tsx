import ProjectSidebar from "./ProjectSidebar";
import { Outlet, useParams } from "react-router-dom";

const ProjectDetail: React.FC = () => {
  const { id } = useParams();

  const res = {
    // id 로 데이터 가져오기
    name: "Project 1",
  };

  return (
    <div className="project-detail-root">
      <ProjectSidebar name={res.name} />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ProjectDetail;

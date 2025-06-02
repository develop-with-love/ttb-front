import { useNavigate } from "react-router-dom";
import "./Project.css";
import Modal from "../../components/Modal";
import { useState } from "react";
// import CreateModal from "./components/CreateModal";
import CreateModal from "../../../layouts/CreateModal";

const data = [
  {
    id: "1234",
    name: "Project 1",
    key: "project1",
    type: "type1",
    lead: "lead1",
  },
  {
    id: "1235",
    name: "Project 2",
    key: "project2",
    type: "type2",
    lead: "lead2",
  },
  {
    id: "2345",
    name: "프로젝트",
    key: "프로젝트",
    type: "type3",
    lead: "lead3",
  },
];

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState(data);

  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/projects/${id}`);
  };

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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setProjects(
      data.filter((project) =>
        project.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="project-index-root">
      <div className="project-index-header">
        <h2 className="project-index-title">Projects</h2>
        <button className="project-index-create" onClick={handleModalOpen}>
          Create project
        </button>
      </div>
      <div className="project-index-search-row">
        <input
          className="project-index-search"
          placeholder="검색어를 입력하세요"
          onChange={handleSearch}
        />
      </div>
      <table className="project-index-table">
        <thead>
          <tr>
            <th>name</th>
            <th>key</th>
            <th>type</th>
            <th>lead</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((item) => (
            <tr key={item.id}>
              <td onClick={() => handleClick(item.id)}>{item.name}</td>
              <td>{item.key}</td>
              <td>{item.type}</td>
              <td>{item.lead}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal open={isModalOpen} onClose={handleModalClose}>
        <CreateModal onCancel={handleModalClose} category="project" />
      </Modal>
    </div>
  );
};

export default ProjectList;

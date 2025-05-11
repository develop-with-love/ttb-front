import { useNavigate } from "react-router-dom";
import "./Project.css";

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
];

const ProjectList: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/projects/${id}`);
  };

  return (
    <div className="project-index-root">
      <div className="project-index-header">
        <h2 className="project-index-title">Projects</h2>
        <button className="project-index-create">Create project</button>
      </div>
      <div className="project-index-search-row">
        <input
          className="project-index-search"
          placeholder="검색어를 입력하세요"
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
          {data.map((item) => (
            <tr key={item.id}>
              <td onClick={() => handleClick(item.id)}>{item.name}</td>
              <td>{item.key}</td>
              <td>{item.type}</td>
              <td>{item.lead}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;

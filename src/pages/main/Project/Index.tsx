import React from "react";
import "./Project.css";

const ProjectIndex: React.FC = () => {
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
        <tbody>{/* 프로젝트 데이터가 있으면 여기에 map으로 렌더링 */}</tbody>
      </table>
    </div>
  );
};

export default ProjectIndex;

import squareRight from "../../../assets/SquareRight.png";

const ProjectColesSidebar: React.FC<{ onToggleSidebar: () => void }> = ({
  onToggleSidebar,
}) => {
  return (
    <div className="project-sidebar-root" style={{ width: "20px" }}>
      <div
        className="project-sidebar-project-name"
        style={{ height: "20px", paddingRight: "0" }}
      ></div>
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
            right: "-18px",
            cursor: "pointer",
            zIndex: 2,
          }}
          onClick={onToggleSidebar}
        >
          <img
            src={squareRight}
            alt="사이드바 토글"
            style={{ width: 34, height: 34 }}
          />
        </button>
      </div>
    </div>
  );
};

export default ProjectColesSidebar;

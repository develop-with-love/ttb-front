import React, { useState } from "react";
import CancelButton from "../pages/components/CancelButton";
import CreateButton from "../pages/components/CreateButton";
import ProjectCreateModal from "../pages/main/Project/components/CreateModal";
import IssueCreateModal from "../pages/main/Project/issues/components/CreateModal";

type CreateModalProps = {
  onCancel: () => void;
  category: String;
};

const CreateModal = ({ onCancel, category }: CreateModalProps) => {
  const [selected, setSelected] = useState("project");
  const [showSubModal, setShowSubModal] = useState(false);

  const handleSubmit = () => {
    setShowSubModal(true);
  };

  const handleShowSubModal = () => {
    setShowSubModal(false);
  };

  return (
    <div className="create-modal-root">
      {category ? (
        category === "project" ? (
          <ProjectCreateModal onCancel={onCancel} />
        ) : (
          <IssueCreateModal onCancel={onCancel} />
        )
      ) : showSubModal ? (
        selected === "project" ? (
          <ProjectCreateModal onCancel={handleShowSubModal} />
        ) : (
          <IssueCreateModal onCancel={handleShowSubModal} />
        )
      ) : (
        <>
          <h2>Create</h2>
          <div style={{ marginBottom: "20px" }}>
            <select
              className="custom-select"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              <option value="project">Project</option>
              <option value="issue">Issue</option>
            </select>
          </div>
          <div className="two-btn-row">
            <CancelButton onCancel={onCancel} />
            <CreateButton onSubmit={handleSubmit} />
          </div>
        </>
      )}
    </div>
  );
};

export default CreateModal;

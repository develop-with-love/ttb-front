import CancelButton from "../../../../components/CancelButton";
import CreateButton from "../../../../components/CreateButton";
import { useState } from "react";
import CreateTask from "./CreateTask";

type CreateModalProps = {
  onCancel: () => void;
};

const projects = [
  { id: "p1", name: "Project A" },
  { id: "p2", name: "Project B" },
  { id: "p3", name: "Project C" },
];
const types = [
  { id: "t1", name: "Epic" },
  { id: "t2", name: "Story" },
  { id: "t3", name: "Bug" },
  { id: "t4", name: "Task" },
];

const CreateModal = ({ onCancel }: CreateModalProps) => {
  const [project, setProject] = useState(projects[0]?.id || "");
  const [type, setType] = useState(types[0]?.id || "");
  const [showTask, setShowTask] = useState(false);

  const handleNext = () => {
    const taskTypeId = types.find((t) => t.name === "Task")?.id;
    if (type === taskTypeId) {
      setShowTask(true);
    } else {
      // 여기에 다른 타입에 대한 동작 추가 가능
    }
  };

  if (showTask) {
    return <CreateTask />;
  }

  return (
    <div className="create-modal-root">
      <div>
        <h2>Create Issue</h2>
        <div className="create-modal-form">
          <div className="create-modal-form-label">
            <label>project</label>
            <select
              value={project}
              onChange={(e) => setProject(e.target.value)}
            >
              {projects.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
          <div className="create-modal-form-label">
            <label>type</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              {types.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="two-btn-row">
        <CancelButton onCancel={onCancel} />
        <CreateButton onSubmit={handleNext} text="Next" />
      </div>
    </div>
  );
};

export default CreateModal;

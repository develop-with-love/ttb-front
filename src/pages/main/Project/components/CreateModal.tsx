import CancelButton from "../../../components/CancelButton";
import CreateButton from "../../../components/CreateButton";

type CreateModalProps = {
  onCancel: () => void;
  onSubmit: () => void;
};

const CreateModal = ({ onCancel, onSubmit }: CreateModalProps) => (
  <div>
    <h2>Create project</h2>
    <div className="two-btn-row">
      <CancelButton onCancel={onCancel} />
      <CreateButton onSubmit={onSubmit} />
    </div>
  </div>
);

export default CreateModal;

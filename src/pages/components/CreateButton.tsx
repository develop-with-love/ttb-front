type CreateButtonProps = {
  onSubmit: () => void;
};
const CreateButton = ({ onSubmit }: CreateButtonProps) => (
  <button className="submit-btn" onClick={onSubmit}>
    Create
  </button>
);
export default CreateButton;

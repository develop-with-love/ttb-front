type CreateButtonProps = {
  onSubmit: () => void;
  text?: string;
};
const CreateButton = ({ onSubmit, text = "Create" }: CreateButtonProps) => (
  <button className="submit-btn" onClick={onSubmit}>
    {text}
  </button>
);
export default CreateButton;

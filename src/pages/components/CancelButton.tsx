type CancelButtonProps = {
  onCancel: () => void;
};
const CancelButton = ({ onCancel }: CancelButtonProps) => (
  <button className="cancel-btn" onClick={onCancel}>
    Cancel
  </button>
);
export default CancelButton;

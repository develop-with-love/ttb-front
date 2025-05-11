import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button style={closeBtnStyle} onClick={onClose} aria-label="close">
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.15)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalStyle: React.CSSProperties = {
  background: "#fff",
  borderRadius: 10,
  boxShadow: "0 2px 12px 0 rgba(0,0,0,0.18)",
  padding: "32px 32px 24px 32px",
  minWidth: 350,
  minHeight: 200,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "1px solid var(--gray-color)",
};

const closeBtnStyle: React.CSSProperties = {
  position: "absolute",
  top: 16,
  right: 18,
  background: "none",
  border: "none",
  fontSize: 22,
  cursor: "pointer",
};

export default Modal;

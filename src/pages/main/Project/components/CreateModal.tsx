import React, { useRef, useState } from "react";
import CancelButton from "../../../components/CancelButton";
import CreateButton from "../../../components/CreateButton";
import BasicInput from "../../../components/BaiscInput";
import plusCircle from "../../../../assets/Plus circle.png";
import iconImg from "../../../../assets/Icon.png";

type CreateModalProps = {
  onCancel: () => void;
};

const CreateModal = ({ onCancel }: CreateModalProps) => {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setImage(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    alert("submit");
    onCancel();
  };

  return (
    <>
      <h2>Create project</h2>
      <div
        style={{
          position: "relative",
          width: 64,
          height: 64,
          margin: "0 auto 20px auto",
        }}
      >
        <button
          type="button"
          onClick={handleImageClick}
          style={{
            border: "none",
            background: "none",
            padding: 0,
            cursor: "pointer",
            borderRadius: "50%",
            overflow: "hidden",
            width: 64,
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={image || plusCircle}
            alt="프로젝트 이미지"
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </button>
        {image && (
          <button
            type="button"
            onClick={() => setImage(null)}
            style={{
              position: "absolute",
              top: -8,
              right: -8,
              width: 18,
              height: 23,
              border: "1px solid var(--gray-color)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 2,
              borderRadius: "50%",
              backgroundColor: "transparent",
              backgroundImage: `url(${iconImg})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            aria-label="이미지 삭제"
          ></button>
        )}
      </div>
      <div className="create-modal-form">
        <div className="create-modal-form-label">
          <label>Title</label>
          <BasicInput />
        </div>
        <div className="create-modal-form-label">
          <label>Key</label>
          <BasicInput />
        </div>
        <div className="create-modal-form-label">
          <label>Type</label>
          <BasicInput />
        </div>
        <div className="create-modal-form-label">
          <label>Lead</label>
          <BasicInput />
        </div>
        <label>Description</label>
        <textarea className="basic-textarea"></textarea>
      </div>
      <div className="two-btn-row">
        <CancelButton onCancel={onCancel} />
        <CreateButton onSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default CreateModal;

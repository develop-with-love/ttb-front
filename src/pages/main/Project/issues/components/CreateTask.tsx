import Editor from "../../../../components/Editor";
import { useState } from "react";
const CreateTask = () => {
  const [content, setContent] = useState("");

  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        width: "100%",
        minHeight: "500px",
        boxSizing: "border-box",
      }}
    >
      {/* 왼쪽 영역 */}
      <div
        style={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <input
          type="text"
          placeholder="title"
          style={{
            width: "100%",
            fontSize: "20px",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #bbb",
            marginBottom: "8px",
          }}
        />
        <Editor value={content} onChange={setContent} placeholder="에디터 창" />{" "}
      </div>
      {/* 오른쪽 영역 */}
      <div
        style={{
          flex: 1,
          border: "1px solid #bbb",
          borderRadius: "8px",
          padding: "24px",
          minWidth: "220px",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div>담당자</div>
        <div>
          카테고리? 라벨?
          <br />
          → 개발, 기획, 등등..
          <br />
          사용자가 정해놓은 것들 중 선택 가능.
        </div>
        <div>priority</div>
        <div>상위 이슈</div>
        <div>깃 연결</div>
      </div>
    </div>
  );
};

export default CreateTask;

import React, { useMemo } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "quill-mention/dist/quill.mention.css";
import QuillMention from "quill-mention";

// 플러그인 등록 (최상단에서 1회만)
if ((Quill as any).imports && !(Quill as any).imports["modules/mention"]) {
  Quill.register("modules/mention", QuillMention);
}

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const mentionList = [
  { id: 1, value: "alice" },
  { id: 2, value: "bob" },
  { id: 3, value: "charlie" },
];

const Editor: React.FC<EditorProps> = ({ value, onChange, placeholder }) => {
  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline"],
        ["link", "image"],
      ],
      mention: {
        allowedChars: /^[A-Za-z\\s]*$/,
        mentionDenotationChars: ["@"],
        source: function (searchTerm: string, renderList: any) {
          const matches = mentionList.filter((item) =>
            item.value.toLowerCase().includes(searchTerm.toLowerCase())
          );
          renderList(matches, searchTerm);
        },
      },
    }),
    []
  );

  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      placeholder={placeholder || "내용을 입력하세요"}
      style={{ minHeight: 300 }}
      modules={modules}
    />
  );
};

export default Editor;

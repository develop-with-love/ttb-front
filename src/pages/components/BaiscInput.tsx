type BasicInputProps = {
  placeholder?: string;
  style?: React.CSSProperties;
};

const BasicInput = ({ placeholder, style }: BasicInputProps) => {
  return (
    <input
      className="basic-input"
      placeholder={placeholder}
      style={style}
    ></input>
  );
};

export default BasicInput;

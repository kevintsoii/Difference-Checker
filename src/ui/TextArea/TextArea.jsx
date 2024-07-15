import CodeMirror from "@uiw/react-codemirror";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";

const TextArea = ({ text, onChangeFunction }) => {
  return (
    <div className="flex flex-col flex-1 items-center">
      <div className="flex items-center justify-between w-full">
        <h1>Text</h1>
        <div className="flex gap-2">
          <DeleteIcon />
          <ContentCopyIcon />
        </div>
      </div>
      <div className="flex w-full">
        <CodeMirror
          value={text}
          onChange={(value) => onChangeFunction(value)}
          className="flex-1 w-64 h-[75vh] border"
        />
      </div>
    </div>
  );
};

export default TextArea;

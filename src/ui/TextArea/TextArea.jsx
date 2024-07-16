import CodeMirror from "@uiw/react-codemirror";

import FileUploadIcon from "@mui/icons-material/FileUpload";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";

const TextArea = ({ text, onChangeFunction, label }) => {
  return (
    <div className="flex flex-col flex-1 items-center h-full">
      <div className="flex items-center justify-between w-full pl-2 pb-0.5">
        <h1 className="text-gray-600 font-medium">{label}</h1>
        <div className="flex gap-1.5 text-gray-600">
          <button
            className="flex items-center rounded-xl hover:bg-gray-200 p-1 active:scale-95"
            onClick={() => onChangeFunction("")}
          >
            <DeleteIcon />
          </button>
          <button
            className="flex items-center rounded-xl hover:bg-gray-200 p-1 active:scale-95"
            onClick={async () => await navigator.clipboard.writeText(text)}
          >
            <ContentCopyIcon />
          </button>
          <button
            className="flex items-center rounded-xl hover:bg-gray-200 p-1 active:scale-95"
            onClick={async () => {
              const filePaths = await window.electronAPI?.openFileDialog();
              if (filePaths.length > 0) {
                const content = await window.electronAPI?.readFile(
                  filePaths[0]
                );
                onChangeFunction(content);
              }
            }}
          >
            <FileUploadIcon />
          </button>
        </div>
      </div>
      <div className="flex w-full">
        <CodeMirror
          value={text}
          height="75vh"
          onChange={(value) => onChangeFunction(value)}
          className="flex-1 w-64 border"
        />
      </div>
    </div>
  );
};

export default TextArea;

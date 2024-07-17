import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import CodeMirrorMerge from "react-codemirror-merge";
import { EditorView } from "codemirror";
import { EditorState } from "@codemirror/state";

import Sidebar from "./Sidebar/Sidebar";
import TextArea from "./TextArea/TextArea";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [diffText1, setDiffText1] = useState("");
  const [diffText2, setDiffText2] = useState("");

  const [showDiff, setShowDiff] = useState(false);

  const editor = useRef(null);
  const diff = useRef(null);

  const lowercaseLines = useSelector(
    (state) => state.settings["Lowercase Lines"]
  );
  const trimWhitespace = useSelector(
    (state) => state.settings["Trim Whitespace"]
  );
  const collapseUnchanged = useSelector(
    (state) => state.settings["Collapse Unchanged"]
  );

  const findDifference = () => {
    if (!text1 || !text2) return;
    setShowDiff(true);
    let modified1 = text1;
    let modified2 = text2;

    if (lowercaseLines) {
      modified1 = modified1.toLowerCase();
      modified2 = modified2.toLowerCase();
    }

    if (trimWhitespace) {
      modified1 = modified1.replace(/^\s+|\s+$/g, "");
      modified2 = modified2.replace(/^\s+|\s+$/g, "");
    }

    setDiffText1(modified1);
    setDiffText2(modified2);

    diff.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (showDiff) {
      diff.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [showDiff]);

  return (
    <main className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 max-h-[calc(100vh-40px)] overflow-y-scroll">
        <div
          className="flex flex-col min-h-[calc(100vh-40px)] items-center py-6 px-14"
          ref={editor}
        >
          <div className="flex items-center flex-1 justify-center w-full gap-12">
            <TextArea text={text1} onChangeFunction={setText1} label="Text 1" />
            <TextArea text={text2} onChangeFunction={setText2} label="Text 2" />
          </div>
          <div className="flex flex-1 items-center">
            <button
              className="mt-4 px-4 py-2.5 rounded-xl bg-green-600/90 hover:bg-green-500 text-white font-medium active:scale-95"
              onClick={findDifference}
            >
              Find Difference
            </button>
          </div>
        </div>

        {showDiff && (
          <div
            className="flex flex-col flex-1 w-full py-6 px-14 min-h-[calc(100vh-40px)]"
            ref={diff}
          >
            <div className="top-8 sticky self-end w-10 h-10 z-10">
              <button
                onClick={() => {
                  console.log(editor.current);
                  editor.current?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full h-full p-2 bg-gray-300/50 hover:opacity-25 rounded-full active:scale-95"
              >
                <ArrowUpwardIcon />
              </button>
            </div>
            <h1 className="self-center font-semibold text-lg mb-3 -mt-6">
              Diff Results
            </h1>

            <CodeMirrorMerge
              collapseUnchanged={
                collapseUnchanged ? { margin: 2, minSize: 3 } : null
              }
              className="h-[75vh]"
            >
              <CodeMirrorMerge.Original
                value={diffText1}
                extensions={[
                  EditorView.editable.of(false),
                  EditorState.readOnly.of(true),
                ]}
                className="h-[75vh]"
              />
              <CodeMirrorMerge.Modified
                value={diffText2}
                extensions={[
                  EditorView.editable.of(false),
                  EditorState.readOnly.of(true),
                ]}
                className="h-[75vh]"
              />
            </CodeMirrorMerge>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;

import { useState } from "react";

import Sidebar from "./Sidebar/Sidebar";
import TextArea from "./TextArea/TextArea";

function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const findDifference = () => {
    
  };

  return (
    <main className="flex flex-1 overflow-y-scroll">
      <Sidebar />
      <div className="flex flex-col flex-1 items-center pt-8 px-16">
        <button
          className="px-4 py-2.5 mb-4 rounded-xl bg-green-600/90 hover:bg-green-500 text-white font-medium active:scale-95"
          onClick={findDifference}
        >
          Find Difference
        </button>

        <div className="flex items-center justify-center w-full gap-12">
          <TextArea text={text1} onChangeFunction={setText1} label="Text 1" />
          <TextArea text={text2} onChangeFunction={setText2} label="Text 2" />
        </div>
      </div>
    </main>
  );
}

export default App;

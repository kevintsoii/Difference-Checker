import { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="tooltip relative"
      onMouseOver={() => setVisible(true)}
      onMouseOut={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="tooltip-text absolute left-[140%] top-[20%] bg-gray-400 text-white text-sm max-w-none px-3 py-1 rounded-xl whitespace-nowrap">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;

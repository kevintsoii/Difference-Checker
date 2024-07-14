import Sidebar from "../Sidebar/Sidebar";
import logo from "../../static/logo.svg";

const Info = () => {
  return (
    <div className="flex flex-1">
      <Sidebar />

      <div className="flex flex-col flex-1 items-center justify-center gap-6 mb-24">
        <img src={logo} alt="logo" className="drop-shadow-2xl h-64" />

        <h1 className="text-4xl font-bold">Welcome to Difference Checker!</h1>
        <h2 className="text-xl font-medium">
          This is a desktop software to help compare the differences between two
          files
        </h2>
        <h3 className="text-lg select-text">
          To view more details, please visit{" "}
          <a
            className="text-blue-500 underline"
            href="https://github.com/kevintsoii/Difference-Checker"
          >
            https://github.com/kevintsoii/Difference-Checker
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Info;

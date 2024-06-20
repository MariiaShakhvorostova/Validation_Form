import React from "react";
import "./SideIcons.scss";

const SideIcons = () => {
  return (
    <div className="side-icons">
      <img
        src="/src/imgs/html-icon.png"
        alt="HTML Icon"
        className="html icon"
      />
      <img
        src="/src/imgs/html-dot.png"
        alt="html Icon"
        className="html-dot dot8"
      />

      <img src="/src/imgs/css-icon.png" alt="CSS Icon" className="css icon" />
      <img
        src="/src/imgs/css-dot.png"
        alt="CSS Icon"
        className="css-dot dot6"
      />

      <img src="/src/imgs/js-icon.png" alt="JS Icon" className="js icon" />
      <img src="/src/imgs/js-dot.png" alt="js Icon" className="js-dot dot8" />

      <img src="/src/imgs/w-icon.png" alt="W Icon" className="w icon" />
      <img src="/src/imgs/w-dot.png" alt="w Icon" className="w-dot dot6" />

      <img
        src="/src/imgs/vscode-icon.png"
        alt="VSCode Icon"
        className="vscode icon"
      />
      <img
        src="/src/imgs/vs-dot.png"
        alt="vscode Icon"
        className="vs-dot dot6"
      />
    </div>
  );
};

export default SideIcons;

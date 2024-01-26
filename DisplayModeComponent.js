/** @format */

import { useDisplayMode } from "./DisplayModeContext";

export default function DisplayModeComponent() {
  const { displayMode, toggleDisplayMode } = useDisplayMode();
  const appStyle = {
    background: displayMode === "light" ? "#ffffff" : "#333333",
    color: displayMode === "light" ? "#333333" : "#ffffff",
    padding: "5px",
  };

  return (
    <div style={appStyle}>
      <h3>Press below button to change the display mode</h3>
      <button
        onClick={() => {
          toggleDisplayMode();
        }}
      >
        {displayMode === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}

import React, { StrictMode } from "react";
import DisplayModeComponent from "./DisplayModeComponent";
import { DisplayModeProvider } from "./DisplayModeContext";

function App() {
  return (
    <StrictMode>
      <DisplayModeProvider>
        <div className="App">
          <DisplayModeComponent />
        </div>
      </DisplayModeProvider>
    </StrictMode>
  );
}

export default App;

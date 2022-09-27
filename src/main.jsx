import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const cyclecodeInfo = {
  name: "cyclecode",
  age: 29,
};

const CycleCodeContext = createContext(cyclecodeInfo);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CycleCodeContext.Provider value={cyclecodeInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CycleCodeContext.Provider>
);

export default CycleCodeContext;

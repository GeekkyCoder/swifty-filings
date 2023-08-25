import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TabContextProvider } from "./context/tab.context.jsx";
import { FormContextProvider } from "./context/form.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TabContextProvider>
      <FormContextProvider>
        <App />
      </FormContextProvider>
    </TabContextProvider>
  </React.StrictMode>
);

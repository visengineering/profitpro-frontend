import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { AppContextProvider } from "./hooks/AppContext";
import { HeadingContextProvider } from "./hooks/useHeading";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <HeadingContextProvider>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </HeadingContextProvider>
  //  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { DataProvider } from "./Components/DtaProvider/DtaProvider";
import { intialState,reducer } from "./Utility/Reducer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DataProvider reducer={reducer} intialState={intialState}>
      <App />
    </DataProvider>
  </BrowserRouter>
);

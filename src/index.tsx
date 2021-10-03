import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ApplicationProvider from "./containers/ApplicationProvider";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ApplicationProvider>
      <App />
    </ApplicationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

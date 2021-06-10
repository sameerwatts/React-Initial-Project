import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { AuthProvider } from "./auth-context/AuthContext";

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);

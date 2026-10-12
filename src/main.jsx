import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";
import { StrictMode } from "react";

// createRoot(document.getElementById("root"))
// .render(
// <StrictMode>
// <App />
// </StrictMode>

// );

createRoot(document.getElementById("root"))
.render(
  <App />
)

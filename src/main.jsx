import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ExperienceSection from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ExperienceSection />
  </StrictMode>
);

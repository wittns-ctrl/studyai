import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import App from "./App";
import "./index.css";

const initialTheme =
  (localStorage.getItem("studz-theme") as "light" | "dark" | null) ??
  (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
document.documentElement.classList.add(initialTheme);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);

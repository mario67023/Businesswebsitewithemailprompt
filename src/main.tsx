
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

const link = document.createElement("link");
link.rel = "icon";
link.type = "image/png";
link.href = "/assets/dgc-logo.png";document.head.appendChild(link);

createRoot(document.getElementById("root")!).render(<App />);  

  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  import favicon from "./imports/output-onlinepngtools.png";

  const link = document.createElement("link");
  link.rel = "icon";
  link.href = favicon;
  document.head.appendChild(link);

  createRoot(document.getElementById("root")!).render(<App />);
  
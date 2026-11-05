import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "@/index.css";
import App from "@/App";

const container = document.getElementById("root");
const app = (
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
// Pre-rendered pages already contain the HTML: hydrate them, otherwise render from scratch.
// React re-inserts the per-page SEO tags, so drop the pre-rendered copies first to avoid duplicates.
const SEO_TAGS = 'title,meta[name=description],meta[name=robots],link[rel=canonical],meta[property="og:title"],meta[property="og:description"],meta[property="og:url"],meta[property="og:image"],meta[name^="twitter:"]:not([name="twitter:card"])';
if (container.dataset.prerendered) {
  document.head.querySelectorAll(SEO_TAGS).forEach((n) => n.remove());
  ReactDOM.hydrateRoot(container, app);
} else ReactDOM.createRoot(container).render(app);

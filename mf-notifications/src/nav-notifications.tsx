import { register } from "microfrontends";
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import pkg from "../package.json";

const getHTMLElement = (ref: HTMLElement | string) =>
  ref instanceof HTMLElement ? ref : document.getElementById(ref);

const Button = () => (
  <li className="flex flex-row self-start py-2 px-4 rounded-full tabs-item gap-4 outline outline-yellow-200">
    <svg className="noti-icon" viewBox="0 0 24 24" width="24" fill="white">
      <path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path>
    </svg>
    <h1>Notifications</h1>
  </li>
);

export default register(pkg.name, "./nav-notifications", {
  mount: (containerRef) => {
    const container = getHTMLElement(containerRef);
    if (container?.getAttribute("data-mf-mounted") === "true") {
      return () => {
        ReactDOM.unmountComponentAtNode(container!);
      };
    }
    container?.setAttribute("data-mf-mounted", "true");
    const root = createRoot(container!);
    root.render(
      <React.StrictMode>
        <Button />
      </React.StrictMode>
    );

    return () => {
      root.unmount();
    };
  },
  unmount: (containerRef) => {
    ReactDOM.unmountComponentAtNode(getHTMLElement(containerRef)!);
  },
});

import { MicrofrontendContext, register } from "microfrontends";
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import pkg from "../package.json";

const getHTMLElement = (ref: HTMLElement | string) =>
  ref instanceof HTMLElement ? ref : document.getElementById(ref);

const Button = () => {
  const { navigate } = useContext(MicrofrontendContext);

  return (
    <a
      href="/messages"
      onClick={(e) => {
        e.preventDefault();
        navigate("/messages");
      }}
    >
      <li className="flex flex-row self-start py-2 px-4 rounded-full tabs-item gap-4 outline outline-red-400">
        <svg className="msg-icon" viewBox="0 0 24 24" width="24" fill="white">
          <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
        </svg>
        <h1>Messages</h1>
      </li>
    </a>
  );
};

export default register(pkg.name, "./nav-messages", {
  mount: (containerRef, props) => {
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
        <MicrofrontendContext.Provider value={props as any}>
          <Button />
        </MicrofrontendContext.Provider>
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

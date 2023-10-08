import { MicrofrontendContext, register, z } from "microfrontends";
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
      href="/explore"
      onClick={(e) => {
        e.preventDefault();
        navigate("/explore");
      }}
    >
      <li className="flex flex-row self-start py-2 px-4 rounded-full tabs-item gap-4 outline outline-teal-300">
        <svg
          className="search-icon"
          viewBox="0 0 24 24"
          width="24"
          fill="white"
        >
          <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
        </svg>
        <h1>Explore</h1>
      </li>
    </a>
  );
};

export default register(pkg.name, "./nav-explore", {
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
  props: z.object({}),
});

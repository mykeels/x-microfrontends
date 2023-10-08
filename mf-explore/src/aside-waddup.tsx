import { MicrofrontendContext, register, z } from "microfrontends";
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import pkg from "../package.json";

const getHTMLElement = (ref: HTMLElement | string) =>
  ref instanceof HTMLElement ? ref : document.getElementById(ref);

const Waddup = () => {
  const { navigate } = useContext(MicrofrontendContext);

  return (
    <div className="card explore outline outline-teal-300">
      <h1>What’s happening</h1>
      <div className="container-explore">
        <span>Trending</span>
        <h5>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            #SysConf2023
          </a>
        </h5>
        <span>6,969 posts</span>
      </div>
      <div className="container-explore">
        <span>Technology</span>
        <h5>Microfrontends</h5>
        <span>12,435 posts</span>
      </div>
      <div className="container-explore">
        <span>Management · Trending</span>
        <h5>Scaling Dev Teams</h5>
        <span>9,876 posts</span>
      </div>
      <div className="container-explore">
        <span>Trending in Nigeria</span>
        <h5>Say No to Bottlenecks</h5>
        <span>234 posts</span>
      </div>
      <h6 className="showmore">Show more</h6>
    </div>
  );
};

export default register(pkg.name, "./aside-waddup", {
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
          <Waddup />
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

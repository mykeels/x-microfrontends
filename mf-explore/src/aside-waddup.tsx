import { register } from "microfrontends";
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import pkg from "../package.json";

const getHTMLElement = (ref: HTMLElement | string) =>
  ref instanceof HTMLElement ? ref : document.getElementById(ref);

const Waddup = () => (
  <div className="card explore outline outline-teal-300">
    <h1>What’s happening</h1>
    <div className="container-explore">
      <span>Trending</span>
      <h5>#SysConf2023</h5>
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

export default register(pkg.name, "./aside-waddup", {
  mount: (containerRef) => {
    const root = createRoot(getHTMLElement(containerRef)!);
    root.render(
      <React.StrictMode>
        <Waddup />
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

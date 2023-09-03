import { register } from "microfrontends";
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import pkg from "../package.json";

const getHTMLElement = (ref: HTMLElement | string) =>
  ref instanceof HTMLElement ? ref : document.getElementById(ref);

const Subscribe = () => (
  <div className="Premium card outline outline-cyan-400">
    <h1>Subscribe to Premium</h1>
    <p>
      Subscribe to unlock new features and if eligible, receive a share of ads
      revenue.
    </p>
    <button className="subscribe button">Subscribe</button>
  </div>
);

export default register(pkg.name, "./nav-verified", {
  mount: (containerRef) => {
    const root = createRoot(getHTMLElement(containerRef)!);
    root.render(
      <React.StrictMode>
        <Subscribe />
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

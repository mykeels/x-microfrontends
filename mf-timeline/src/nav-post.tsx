import { register } from "microfrontends";
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import pkg from "../package.json";

const getHTMLElement = (ref: HTMLElement | string) =>
  ref instanceof HTMLElement ? ref : document.getElementById(ref);

const Button = () => <div>Post</div>;

export default register(pkg.name, "./nav-post", {
  mount: (containerRef) => {
    const root = createRoot(getHTMLElement(containerRef)!);
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
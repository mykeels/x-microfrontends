import {
  register,
  MicrofrontendSlot,
  MicrofrontendContext,
} from "microfrontends";
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { QueryClientProvider, QueryClient } from "react-query";

import pkg from "../package.json";

const queryClient = new QueryClient();

const getHTMLElement = (ref: HTMLElement | string) =>
  ref instanceof HTMLElement ? ref : document.getElementById(ref);

export default register(pkg.name, "./layout", {
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
          <QueryClientProvider client={queryClient}>
            <MicrofrontendSlot name="layout" {...{ content: pkg.name }} />
          </QueryClientProvider>
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

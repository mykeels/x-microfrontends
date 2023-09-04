import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { MicrofrontendContext, register } from "microfrontends";

import pkg from "../package.json";

const getHTMLElement = (ref: HTMLElement | string) =>
  ref instanceof HTMLElement ? ref : document.getElementById(ref);

const Timeline = () => (
  <section className="flex flex-col feed grow outline outline-red-400">
    <div className="flex flex-col home w-full">
      <div className="home-container w-full">
        <h1>Messages</h1>
      </div>
    </div>
  </section>
);

function App() {
  const queryClientRef = React.useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Timeline />
    </QueryClientProvider>
  );
}

export default register(pkg.name, "./main", {
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
        <MicrofrontendContext.Provider
          value={
            {
              ...props,
            } as any
          }
        >
          <App />
        </MicrofrontendContext.Provider>
      </React.StrictMode>
    );

    return () => {
      try {
        root.unmount();
      } catch {}
    };
  },
  unmount: (containerRef) => {
    ReactDOM.unmountComponentAtNode(getHTMLElement(containerRef)!);
  },
});

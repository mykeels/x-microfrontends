import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { MicrofrontendContext, register } from "microfrontends";

import pkg from "../package.json";

const getHTMLElement = (ref: HTMLElement | string) =>
  ref instanceof HTMLElement ? ref : document.getElementById(ref);

function App() {
  const queryClientRef = React.useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <ReactQueryDevtools />
      <div>Timeline</div>
    </QueryClientProvider>
  );
}

export default register(pkg.name, "./index", {
  mount: (containerRef, props) => {
    const root = createRoot(getHTMLElement(containerRef)!);
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
      root.unmount();
    };
  },
  unmount: (containerRef) => {
    ReactDOM.unmountComponentAtNode(getHTMLElement(containerRef)!);
  },
});

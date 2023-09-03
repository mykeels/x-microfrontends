import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { AppRouter } from "./components/index.ts";

function App({
  getManifestsUri = process.env.REACT_APP_API_ROOT_URL ||
    "http://localhost:3333",
} = {}) {
  const queryClientRef = React.useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <ReactQueryDevtools />
      <AppRouter
        getMicrofrontendManifests={async () =>
          fetch(getManifestsUri).then((res) => res.json())
        }
      />
    </QueryClientProvider>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

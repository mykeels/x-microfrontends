import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MicrofrontendRoutes } from "./components/index.ts";

function App() {
  const queryClientRef = React.useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <ReactQueryDevtools />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MicrofrontendRoutes getMicrofrontendManifests={async () => []} />
            }
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

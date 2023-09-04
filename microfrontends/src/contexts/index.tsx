import React from "react";

import { ErrorBoundary, MicrofrontendMountProps } from "../components";

const defaults = {
  homedir: "/",

  url: "/",

  navigate: () => {},

  manifests: [],

  fetch: (input: RequestInfo, init?: RequestInit) => window.fetch(input, init),

  user: undefined,

  eventBus: undefined,

  layout: {
    navItems: [],
    logout: () => {},
  },

  ErrorBoundary: ({ children }: { children: React.ReactElement }) => (
    <ErrorBoundary Fallback={() => <>An Error occurred</>}>
      {children}
    </ErrorBoundary>
  ),
};

export const MicrofrontendContext =
  React.createContext<MicrofrontendMountProps>(defaults);

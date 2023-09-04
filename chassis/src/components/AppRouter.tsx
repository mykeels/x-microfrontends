import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EventEmitter } from "eventemitter3";
import {
  MicrofrontendContext,
  MicrofrontendManifest,
  MicrofrontendScreen,
  ErrorBoundary,
} from "microfrontends";

import { Layout } from "./Layout/index.tsx";
import pkg from "../../package.json";
import { useQuery } from "react-query";

const eventBus = new EventEmitter();
const Loading = () => (
  <div>This is a Loading component. It should look much better than this.</div>
);
const Fallback = () => (
  <div>Something went wrong. This is a Fallback component.</div>
);

const AppRoutes = ({ manifests }: { manifests: MicrofrontendManifest[] }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const homedir = `${process.env.PUBLIC_URL || ""}${location.pathname}`;

  return (
    <MicrofrontendContext.Provider
      value={{
        manifests,
        navigate,
        eventBus,
        fetch,
        homedir,
        user: { permissions: [] },
        layout: {
          navItems: [],
          logout: () => {},
        },
        ErrorBoundary: (props) => (
          <ErrorBoundary Fallback={Fallback} {...props} />
        ),
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route
          path="*"
          element={
            <MicrofrontendScreen
              Loading={Loading}
              Fallback={Fallback}
              manifests={manifests}
              host={pkg.name}
              eventBus={eventBus}
              fetch={window.fetch}
              homedir={homedir}
              navigate={navigate}
              user={{
                permissions: [],
              }}
              layout={{
                navItems: [],
                logout: () => {},
              }}
            />
          }
        />
      </Routes>
    </MicrofrontendContext.Provider>
  );
};

type MicrofrontendRoutesProps = {
  getMicrofrontendManifests: (
    overrides: string[]
  ) => Promise<MicrofrontendManifest[]>;
};

export const AppRouter = ({
  getMicrofrontendManifests,
}: MicrofrontendRoutesProps) => {
  const { data: manifests = [] } = useQuery("manifests", () =>
    getMicrofrontendManifests([])
  );
  return (
    <BrowserRouter>
      <AppRoutes manifests={manifests} />
    </BrowserRouter>
  );
};

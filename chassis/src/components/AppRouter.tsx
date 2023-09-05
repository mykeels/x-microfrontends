import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EventEmitter } from "eventemitter3";
import {
  MicrofrontendContext,
  MicrofrontendManifest,
  ErrorBoundary,
} from "microfrontends";
import { useQuery } from "react-query";

import { Layout } from "./Layout/index.tsx";

const eventBus = new EventEmitter();

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
        url: location.pathname,
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
        <Route path="*" element={<Layout />} />
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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppRoutes manifests={manifests} />
    </BrowserRouter>
  );
};

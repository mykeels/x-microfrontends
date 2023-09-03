import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { EventEmitter } from "eventemitter3";
import pkg from "../../package.json";

import { MicrofrontendManifest, MicrofrontendScreen } from "microfrontends";

const eventBus = new EventEmitter();
const Loading = () => (
  <div>This is a Loading component. It should look much better than this.</div>
);
const Fallback = () => (
  <div>Something went wrong. This is a Fallback component.</div>
);

type MicrofrontendRoutesProps = {
  getMicrofrontendManifests: (
    overrides: string[]
  ) => Promise<MicrofrontendManifest[]>;
};

export const MicrofrontendRoutes = ({
  getMicrofrontendManifests,
}: MicrofrontendRoutesProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const homedir = `${process.env.PUBLIC_URL || ""}${location.pathname}`;

  return (
    <MicrofrontendScreen
      Loading={Loading}
      Fallback={Fallback}
      getMicrofrontendManifests={() => getMicrofrontendManifests([])}
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
  );
};

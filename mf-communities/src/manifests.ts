import { config } from "dotenv";
import { MicrofrontendManifest } from "microfrontends";

import Main from "./main.tsx";
import NavCommunities from "./nav-communities.tsx";

config();

const manifest = {
  scope: Main.scope,
  module: "./unused-root-module.js",
  entry: `http://localhost:${process.env.PORT}/remoteEntry.js`,
  events: {
    consumes: [],
  },
  slots: {
    routes: [],
    "nav:item": [
      {
        name: "Communities",
        module: NavCommunities.module,
        props: NavCommunities.props,
        priority: 4,
      },
    ],
    "main:content": [
      {
        name: "Main",
        module: Main.module,
        props: Main.props,
        route: "/communities/*",
      },
    ],
  },
  auth: {},
} satisfies MicrofrontendManifest;

export default manifest;

console.log(JSON.stringify(manifest, null, 2));

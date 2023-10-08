import { config } from "dotenv";
import { MicrofrontendManifest } from "microfrontends";

import Main from "./main.tsx";
import NavExplore from "./nav-explore.tsx";
import AsideSearch from "./aside-search.tsx";
import AsideWaddup from "./aside-waddup.tsx";

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
        name: "Explore",
        module: NavExplore.module,
        props: NavExplore.props,
        priority: 1,
      },
    ],
    "aside:item": [
      {
        name: "Search",
        module: AsideSearch.module,
        props: AsideSearch.props,
        priority: 0,
      },
      {
        name: "What's happening",
        module: AsideWaddup.module,
        props: AsideWaddup.props,
        priority: 2,
      },
    ],
    "main:content": [
      {
        name: "Main",
        module: Main.module,
        props: Main.props,
        route: "/explore/*",
      },
    ],
  },
  auth: {},
} satisfies MicrofrontendManifest;

export default manifest;

console.log(JSON.stringify(manifest, null, 2));

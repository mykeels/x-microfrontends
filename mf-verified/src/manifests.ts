import { config } from "dotenv";
import { MicrofrontendManifest } from "microfrontends";

import Main from "./main.tsx";
import NavVerified from "./nav-verified.tsx";
import AsideSubscribe from "./aside-subscribe.tsx";

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
        name: "Verified",
        module: NavVerified.module,
        props: NavVerified.props,
        priority: 5,
      },
    ],
    "aside:item": [
      {
        name: "Subscribe",
        module: AsideSubscribe.module,
        props: AsideSubscribe.props,
        priority: 1,
      },
    ],
    "main:content": [
      {
        name: "Main",
        module: Main.module,
        props: Main.props,
        route: "/verified/*",
      },
    ],
  },
  auth: {},
} satisfies MicrofrontendManifest;

export default manifest;

console.log(JSON.stringify(manifest, null, 2));

import { config } from "dotenv";
import { MicrofrontendManifest } from "microfrontends";

import Main from "./main.tsx";
import NavNotifications from "./nav-notifications.tsx";
import AsideFollowSuggestions from "./aside-follow-suggestions.tsx";

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
        name: "Notifications",
        module: NavNotifications.module,
        props: NavNotifications.props,
        priority: 2,
      },
    ],
    "aside:item": [
      {
        name: "Who to follow",
        module: AsideFollowSuggestions.module,
        props: AsideFollowSuggestions.props,
        priority: 3,
      },
    ],
    "main:content": [
      {
        name: "Main",
        module: Main.module,
        props: Main.props,
        route: "/notifications/*",
      },
    ],
  },
  auth: {},
} satisfies MicrofrontendManifest;

export default manifest;

console.log(JSON.stringify(manifest, null, 2));

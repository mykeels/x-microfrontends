import { MicrofrontendManifest, jsonSchemaOf, z } from "microfrontends";

import Main from "./main.tsx";
import NavHome from "./nav-home.tsx";
import NavPost from "./nav-post.tsx";

const manifest = {
  scope: Main.scope,
  module: "./unused-root-module.js",
  entry: `http://localhost:${process.env.PORT}/remoteEntry.js`,
  events: {
    consumes: ["d", "e", "f"],
    foo: jsonSchemaOf(
      z.object({
        a: z.string(),
      })
    ),
  },
  slots: {
    routes: [],
    "nav:item": [
      {
        name: "Home",
        module: NavHome.module,
        props: NavHome.props,
        priority: 0,
      },
    ],
    "nav:footer": [
      {
        name: "Post",
        module: NavPost.module,
        props: NavPost.props,
      },
    ],
    "main:content": [
      {
        name: "Main",
        module: Main.module,
        props: Main.props,
        route: "/",
      },
    ],
  },
  auth: {},
} satisfies MicrofrontendManifest;

export default manifest;

console.log(JSON.stringify(manifest, null, 2));

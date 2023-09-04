# X Microfrontends: Twitter Clone with Microfrontends

x-microfrontends is an open-source project that demonstrates the concept of microfrontends by building a Twitter clone with seven (7) separate React projects that seamlessly work together to create a complete web application.

I built this as a demo for my ["Scaling teams with Microfrontends - Every CTO's dream"](https://www.papercall.io/talks/254933/children/254934) talk at SysConf 2023.

See [Demo](https://mykeels.github.io/x-microfrontends).

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [How it works](#how-it-works)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)

## Overview

Microfrontends are an architectural approach. They help you to break down your frontend monolith into smaller, independently developed, deployable applications.

This project serves as a practical example of how microfrontends can be used to build a complex web application with different teams working on different parts of the application.

## Project Structure

The [chassis](./chassis/README.md) project composes 6 web apps, [communities](./mf-communities/README.md), [explore](./mf-explore/README.md), [messages](./mf-messages/README.md), [notifications](./mf-notifications/README.md), [timeline (home)](./mf-timeline/README.md), [verified](./mf-verified/README.md) into a cohesive web experience.

Each microfrontend is responsible for a specific part of the X clone.

[![X Microfrontends Demo Image](https://github.com/mykeels/rest-api-ioc-demo/assets/11996508/d835d338-2283-466e-b393-a06247a75bd2)](https://mykeels.github.io/x-microfrontends)

The outline colors in the image above show which projects are responsible for which parts of the page.

## Getting Started

To get started with x-microfrontends and run the Twitter clone locally, run:

```sh
git clone https://github.com/mykeels/x-microfrontends.git
pnpm i
pnpm run -r copy:env
pnpm run --parallel -r start
```

and open https://localhost:4000 in the browser.

This starts the 7 Frontend projects described above in different ports, along with the [api](./api/README.md) and begins building the [microfrontends library](./microfrontends/README.md).

## How it works

Each project uses [Webpack's Module Federation](https://webpack.js.org/concepts/module-federation/) to expose files.

See [example in mf-timeline](https://github.com/mykeels/x-microfrontends/blob/master/mf-timeline/config-overrides.js#L16-L45), where we

- expose [3 files](https://github.com/mykeels/x-microfrontends/blob/master/mf-timeline/config-overrides.js#L19-L23),
- ensure there is [a remoteEntry.js file](https://github.com/mykeels/x-microfrontends/blob/master/mf-timeline/config-overrides.js#L18) which tells webpack how to find these files.
- and [give them all a unique name identifier](https://github.com/mykeels/x-microfrontends/blob/master/mf-timeline/config-overrides.js#L17), which we get from the package.json.

The above actions form 3 concepts called `module`, `entry`, and `scope` respectively.

We can see that a microfrontend can expose one or more `module` entries, under the same `scope`, with an `entry` that tells webpack how to find them. These concepts are helpful for understanding what comes next.

### Dynamic Remote Resolution

This project uses [Webpack Module Federation's promise-based dynamic remotes](https://webpack.js.org/concepts/module-federation/#promise-based-dynamic-remotes), where instead of having to manually specify each remote in the chassis project, we can resolve the values for their `scope`, `module` and `entry` at runtime.

When running locally, these values are obtained from the microfrontend manifests served by the [api project](./api/README.md) at http://localhost:3333.

### What are microfrontend manifests?

To aid in dynamic remote resolution, each microfrontend publishes a `microfrontend-manifest.json`` file that contains information about how to load itself.

See [example in mf-timeline](https://github.com/mykeels/x-microfrontends/blob/master/mf-timeline/public/microfrontend-manifest.json#L1-L28), where we have a

- scope: `timeline`
- module: `./unused-module.js`
- entry: `http://localhost:4001/remoteEntry.js`

Notice that the `module: ./unused-module.js` is incorrect compared to the [3 exposed files](https://github.com/mykeels/x-microfrontends/blob/master/mf-timeline/config-overrides.js#L19-L23) in its webpack module federation config. This is because the manifest can have one root module, and multiple slots module.

#### What are Slots?

[Slots](https://github.com/mykeels/x-microfrontends/blob/master/mf-timeline/public/microfrontend-manifest.json#L6-L27) are how we are able to express that we have exposed more than one file in our module federation config. Each slot represents an exposed interface, that

- inherits its `scope` and `entry` from the root manifest,
- may inherit its `module` from the root manifest,
- may contain other parameters that can be used in choosing which slots get rendered.

Slots can be rendered either:

- directly on the route with [MicrofrontendScreen](./microfrontends/src/components/MicrofrontendScreen/README.md), making them a route-level slot
- directly within an HTML Element with [MicrofrontendSlot](./microfrontends/src/components/MicrofrontendSlot/README.md), making them a non route-level slot.

#### Loading Microfrontends

When matching slots are found, their:

- `entry` script is loaded on the DOM
- we initialize the exposed `module` we want
- using the exposed functions, we can `mount` the app to an HTML element and `unmount` when done.

#### Mount and Unmount?

Every exposed file exports a default:

```js
export default {
  mount: (container, props) => {
    return () => unmount();
  },
  unmount: (container) => {},
};
```

such as [in mf-timeline](https://github.com/mykeels/x-microfrontends/blob/master/mf-timeline/src/timeline.tsx#L818-L840).

the [mount function's props parameter](https://github.com/mykeels/x-microfrontends/blob/master/microfrontends/src/components/Microfrontend/Microfrontend.types.ts#L56-L65) contain data and functions we pass down to every microfrontend.

Having such a simple interface instead of exporting say a React component directly is a powerful concept because it lets us abstract away the moving parts of different frameworks. Technically, this can be used to load Angular, Vue, Solid, HTMX, etc, because all we need is a way to mount HTML with behaviours to an element, and unmount it when done.

### Communication among microfrontends

One of the properties of the microfrontend-manifest.json I did not talk about is the `events`, which may expose a mapping of event names to a [JSON schema](https://json-schema.org/) object that describes its data.

Using the Microfrontend Context, we can [pass an eventBus](https://github.com/mykeels/x-microfrontends/blob/master/chassis/src/components/AppRouter.tsx#L77) to our microfrontends, which they can use to communicate across the various apps.

## Contributing

Contributions to x-microfrontends are welcome!

Feel free to open issues, or create pull requests.

Potential contribution areas are:

### 1. Sharing Tanstack Query Client

I've been toying with the idea of passing a tanstack query client, as part of the `mount` function's props parameter, which will enable sharing the query cache, a very powerful tool if it works.

### 2. Demonstrate communicating with the Event Bus

A good example of this is the [aside-search app](https://github.com/mykeels/x-microfrontends/blob/master/mf-explore/src/aside-search.tsx#L12-L29),

- emitting a `search` event that contains `{ "query": "Blah" }`,
- having the chassis receive the event data and log to the console.

### 3. Demonstrate route-level slots

To enhance the above, the [explore app](https://github.com/mykeels/x-microfrontends/blob/master/mf-explore/config-overrides.js#L20-L22) could

- expose a route-level slot that targets `/explore`, that the chassis can navigate to, - passing the `query` as a route search param..

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

Happy microfrontending, and enjoy [exploring this X clone built with microfrontends](https://mykeels.github.io/x-microfrontends)!

## Credits

The original html+css code used for this demo is by [@shubhstwt on X](https://twitter.com/shubhstwt/status/1692968496010015203). Without his work on the open source [xclone](https://github.com/shubhsharma19/xclone), it would be much harder to put this demo together than it currently is.

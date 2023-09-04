# X Microfrontends: Twitter Clone with Microfrontends

x-microfrontends is an open-source project that demonstrates the concept of microfrontends by building a Twitter clone with seven (7) separate React projects that seamlessly work together to create a complete web application.

I built this as a demo for my ["Scaling teams with Microfrontends - Every CTO's dream"](https://www.papercall.io/talks/254933/children/254934) talk at SysConf 2023.

See [Demo](https://mykeels.github.io/x-microfrontends).

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
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

## Contributing

Contributions to x-microfrontends are welcome!

Feel free to open issues, or create pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

Happy microfrontending, and enjoy [exploring this X clone built with microfrontends](https://mykeels.github.io/x-microfrontends)!

## Credits

The original html+css code used for this demo is by [@shubhstwt on X](https://twitter.com/shubhstwt/status/1692968496010015203). Without his work on the open source [xclone](https://github.com/shubhsharma19/xclone), it would be much harder to put this demo together than it currently is.

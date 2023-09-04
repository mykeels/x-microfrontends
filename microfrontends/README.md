# microfrontends

A library of utilities for powering Microfrontends.

## To load a Microfrontend

You need the [Microfrontend](./src/components/Microfrontend/index.ts) component to do this.

```jsx
import { Microfrontend } from "microfrontends";

<Microfrontend
  entry="http://localhost:3002/remoteEntry.js"
  scope="ProjectScope"
  module="./src/bootstrap.js"
  Fallback={<div>Fallback</div>}
  Loading={<div>Loading</div>}
/>;
```

## To load Microfrontends on Routes in a Chassis

```jsx
import { MicrofrontendScreen } from "microfrontends";
import { useNavigate, Switch, Route } from "react-router-dom";

import HomeScreen from "./components/HomeScreen";
import { getMicrofrontendManifests } from "./services/microfrontends.service";

export const AppRoutes = () => {
  const navigate = useNavigate();
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route
        path="*"
        component={(props) => (
          <MicrofrontendScreen
            getMicrofrontendManifests={getMicrofrontendManifests}
            Fallback={() => <div>Page Not Found</div>}
            Loading={() => <div>...Loading...</div>}
            navigate={navigate}
            {...props}
          />
        )}
      />
    </Switch>
  );
};
```

## Microfrontend Debugging Tools

To see which microfrontends are currently active on a page, enter the following code in the browser console:

```js
console.table(
  Object.entries(window.$mfs)
    .map(([scope, values]) =>
      Object.entries(values)
        .map(([module, { instances }]) => ({
          scope,
          module,
          instances,
        }))
        .filter(({ instances }) => instances)
    )
    .flat()
);
```

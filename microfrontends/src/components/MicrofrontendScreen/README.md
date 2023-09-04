# MicrofrontendScreen

This component checks all available manifests to find an exposed component that is capable of rendering in the current Route.

e.g.

```jsx
import { MicrofrontendScreen } from "microfrontends";
import { useNavigate, BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "./components/HomeScreen";

export const AppRoutes = () => {
  const navigate = useNavigate();
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={HomeScreen} />
        <Route
          path="*"
          component={(props) => (
            <MicrofrontendScreen
              getMicrofrontendManifests={async () =>
                fetch("/microfrontend-manifests.json").then((res) => res.json())
              }
              Fallback={() => <div>Page Not Found</div>}
              Loading={() => <div>...Loading...</div>}
              navigate={navigate}
              {...props}
            />
          )}
        />
      </Routes>
    </BrowserRouter>
  );
};
```

## Configuration Options

| Option                    | Description                                                                                                                                                                                                                                          | Required                                           |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| navigate                  | Helps loaded microfrontends to navigate using their parent's (the current) router.                                                                                                                                                                   | Yes                                                |
| Loading                   | A component to display when loading a Microfrontend                                                                                                                                                                                                  | Yes                                                |
| Fallback                  | A component to render when loading a Microfrontend fails for whatever reason.                                                                                                                                                                        | Yes                                                |
| manifests                 | Specify an array of microfrontend manifests, an alternative to the `getMicrofrontendManifests` function prop.                                                                                                                                        | Yes if `getMicrofrontendManifests` is not provided |
| getMicrofrontendManifests | Specify a function to use to fetch manifests from whatever source you prefer.                                                                                                                                                                        | Yes if `manifests` is not provided                 |
| host                      | Specify name of a host to target e.g. "timeline" will only render slots that have a `"host": "timeline"` property                                                                                                                                    | No                                                 |
| user                      | Specify a user object with permissions to target e.g. `{ "permissions": ["manage:/foo", "read-only:/blah"] }` to ensure that only slots that specify those permissions are rendered. This is very useful for preventing access to permissioned slots | No                                                 |

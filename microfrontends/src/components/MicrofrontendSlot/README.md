# MicrofrontendSlot

This component checks all available manifests to find an exposed component that is capable of rendering in the current HTML element.

e.g.

```jsx
<MicrofrontendSlot name="nav:item" /> // will render all slots targeting "nav:item"
<MicrofrontendSlot
    className="contents"
    name="nav:item"
/> // same as above and add a classname
<MicrofrontendSlot
    className="contents"
    name="nav:item"
    transform={
        (slots: MicrofrontendSlot[]) =>
            slots.sort((a, b) => {
                return (a.priority || 0) - (b.priority || 0);
            }
        )
    }
/> // same as above and sorts the slots by an extra priority property
```

## Configuration Options

| Option   | Description                                                                                                                                                                                                                                          | Required |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Loading  | A component to display when loading a Microfrontend                                                                                                                                                                                                  | Yes      |
| Fallback | A component to render when loading a Microfrontend fails for whatever reason.                                                                                                                                                                        | Yes      |
| host     | Specify name of a host to target e.g. "timeline" will only render slots that have a `"host": "timeline"` property                                                                                                                                    | No       |
| user     | Specify a user object with permissions to target e.g. `{ "permissions": ["manage:/foo", "read-only:/blah"] }` to ensure that only slots that specify those permissions are rendered. This is very useful for preventing access to permissioned slots | No       |

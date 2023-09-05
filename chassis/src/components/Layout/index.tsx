import {
  MicrofrontendContext,
  MicrofrontendSlot,
  canMatchRoute,
} from "microfrontends";
import "./Layout.css";

import React, { useContext } from "react";

const sortByPriority = (slots: MicrofrontendSlot[]) =>
  slots.sort((a, b) => {
    return (a.priority || 0) - (b.priority || 0);
  });

export const Layout = () => {
  const { url } = useContext(MicrofrontendContext);

  return (
    <>
      <div className="new-post-button">
        <svg
          className="verified"
          viewBox="0 -2 24 24"
          width="28"
          height="24"
          stroke="white"
        >
          <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
        </svg>
      </div>

      <main className="flex flex-row px-32 py-2 gap-8">
        <nav className="flex flex-col self-start justify-between h-[90dvh] sticky top-0 px-4">
          <img
            src="https://seeklogo.com/images/T/twitter-x-logo-101C7D2420-seeklogo.com.png?v=638258077300000000"
            alt="logo"
            className="flex self-start h-12 w-12 mx-4"
          />
          <ul className="flex flex-col gap-4 list-none">
            <MicrofrontendSlot
              className="contents"
              name="nav:item"
              transform={sortByPriority}
            />
          </ul>
          <MicrofrontendSlot className="contents" name="nav:footer" />
        </nav>
        <MicrofrontendSlot
          className="contents"
          name="main:content"
          transform={(slots) => {
            return slots.filter((slot) => {
              const route =
                "route" in slot && typeof slot.route === "string"
                  ? slot.route
                  : null;
              return route ? canMatchRoute(url, route) : false;
            });
          }}
        />
        <aside className="flex flex-col self-start right sticky top-[-224px] w-1/4">
          <div className="container-right">
            <MicrofrontendSlot
              className="contents"
              name="aside:item"
              transform={sortByPriority}
            />
            <div className="container-terms-of-service">
              <span>Terms of service</span>
              <span>Privacy Policy</span>
              <span>Cookie Policy</span>
              <span>Accesibility</span>
              <span>Ads info &nbsp;More ···</span>
              <span>© 2023 X Corp.</span>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
};

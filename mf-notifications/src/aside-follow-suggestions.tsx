import { register, z } from "microfrontends";
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import pkg from "../package.json";

const getHTMLElement = (ref: HTMLElement | string) =>
  ref instanceof HTMLElement ? ref : document.getElementById(ref);

const WhoToFollow = () => (
  <div className="card outline outline-yellow-200">
    <h1>Who to follow</h1>
    <div className="container-follow flex">
      <img
        src="https://pbs.twimg.com/profile_images/1620106569236246529/uRZcbsLg_400x400.jpg"
        alt="photo"
      />
      <div>
        <span>Shubh Sharma ☕</span>
        <br />
        <span className="user-handle">
          <a
            href="https://twitter.com/shubhstwt"
            target="_blank"
            rel="noopener noreferrer"
          >
            @shubhstwt
          </a>
        </span>
      </div>
      <button className="button"></button>
      <button className="button follow">Follow</button>
    </div>
    <div className="container-follow flex">
      <img
        src="https://i.pinimg.com/736x/ec/e2/b0/ece2b0f541d47e4078aef33ffd22777e.jpg"
        alt="photo"
      />
      <div>
        <span>Shivsagar_Dev</span>
        <br />
        <span className="user-handle">@CheezzyPizzZa</span>
      </div>
      <button className="button"></button>
      <button className="button follow">Follow</button>
    </div>
    <div className="container-follow flex">
      <img
        src="https://i.pinimg.com/736x/ec/e2/b0/ece2b0f541d47e4078aef33ffd22777e.jpg"
        alt="photo"
      />
      <div>
        <span>Dev_John_141</span>
        <br />
        <span className="user-handle">@devdev1412</span>
      </div>
      <button className="button"></button>
      <button className="button follow">Follow</button>
    </div>
    <div className="container-follow flex">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSFot_CjQA9mkZtz3y4861VHLIme95sw_M0A"
        alt="photo"
      />
      <div>
        <span>PickleRick</span>
        <br />
        <span className="user-handle">@itsmepicklerick</span>
      </div>
      <button className="button"></button>
      <button className="button follow">Follow</button>
    </div>
  </div>
);

export default register(pkg.name, "./aside-follow-suggestions", {
  mount: (containerRef) => {
    const container = getHTMLElement(containerRef);
    if (container?.getAttribute("data-mf-mounted") === "true") {
      return () => {
        ReactDOM.unmountComponentAtNode(container!);
      };
    }
    container?.setAttribute("data-mf-mounted", "true");
    const root = createRoot(container!);
    root.render(
      <React.StrictMode>
        <WhoToFollow />
      </React.StrictMode>
    );

    return () => {
      root.unmount();
    };
  },
  unmount: (containerRef) => {
    ReactDOM.unmountComponentAtNode(getHTMLElement(containerRef)!);
  },
  props: z.object({}),
});

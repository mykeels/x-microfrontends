import { register } from "microfrontends";
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
        src="https://i.pinimg.com/564x/c8/9a/95/c89a95b93677318157e3259a8e99e43b.jpg"
        alt="photo"
      />
      <div>
        <span>Ippo</span>
        <br />
        <span className="user-handle">@makinouchiippo</span>
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
    const root = createRoot(getHTMLElement(containerRef)!);
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
});

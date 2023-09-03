import { MicrofrontendSlot } from "microfrontends";
import "./Layout.css";

import React from "react";

export const Layout = () => {
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
              transform={(slots) =>
                slots.sort((a, b) => {
                  return (a.priority || 0) - (b.priority || 0);
                })
              }
            />
          </ul>
          <MicrofrontendSlot className="contents" name="nav:footer" />
        </nav>
        <MicrofrontendSlot className="contents" name="main:content" />
        <aside className="flex flex-col self-start right sticky top-[-224px] w-1/4">
          <div className="container-right">
            <div className="search-wrapper">
              <div className="flex flex-row gap-2 container-search px-4 outline outline-teal-300">
                <svg
                  className="flex search-bar-icon self-center relative bottom-2"
                  viewBox="0 -8 24 20"
                  width="16"
                  height="24"
                  fill="gray"
                >
                  <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                </svg>
                <input
                  type="text"
                  className="flex search-bar self-start grow"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="Premium card outline outline-cyan-400">
              <h1>Subscribe to Premium</h1>
              <p>
                Subscribe to unlock new features and if eligible, receive a
                share of ads revenue.
              </p>
              <button className="subscribe button">Subscribe</button>
            </div>
            <div className="card explore outline outline-green-300">
              <h1>What’s happening</h1>
              <div className="container-explore">
                <span>Trending</span>
                <h5>#LeaveTwitterElon</h5>
                <span>6,166 posts</span>
              </div>
              <div className="container-explore">
                <span>Technology</span>
                <h5>Apple</h5>
                <span>6,166 posts</span>
              </div>
              <div className="container-explore">
                <span>Business & finance · Trending</span>
                <h5>Gen Z</h5>
                <span>6,166 posts</span>
              </div>
              <div className="container-explore">
                <span>Trending in India</span>
                <h5>Bengaluru</h5>
                <span>6,166 posts</span>
              </div>
              <h6 className="showmore">Show more</h6>
            </div>
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

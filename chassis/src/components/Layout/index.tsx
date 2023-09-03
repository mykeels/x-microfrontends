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
          <div className=" outline outline-purple-400">
            <button className="flex justify-around items-center bg-[#1d9bf0] text-white leftbutton text-xl py-2 px-4 mx-4 rounded-full w-[80%]">
              Post
            </button>
          </div>
        </nav>
        <section className="flex flex-col feed grow outline outline-purple-400">
          <div className="logo-container">
            <img
              src="https://pbs.twimg.com/profile_images/1620106569236246529/uRZcbsLg_400x400.jpg"
              alt="pfp"
              className="pfp"
            />
          </div>
          <header>
            <div className="following-tabs-container flex">
              <div className="tab1">
                <span>For you</span>
              </div>
              <div className="tab2">
                <span>Following</span>
              </div>
            </div>
          </header>

          <div className="flex flex-col home w-full">
            <div className="home-container w-full">
              <h1>Home</h1>
              <img
                src="https://pbs.twimg.com/profile_images/1620106569236246529/uRZcbsLg_400x400.jpg"
                alt="pfp"
                className="pfp"
              />
            </div>
            <div className="header w-full">
              <div className="home-tabs flex">
                <div className="tab1">
                  <span>For you</span>
                </div>
                <div className="tab2">
                  <span>Following</span>
                </div>
              </div>
            </div>
          </div>
          <div className="create-post-container w-full">
            <div className="create-newpost flex-start">
              <img
                src="https://pbs.twimg.com/profile_images/1620106569236246529/uRZcbsLg_400x400.jpg"
                alt="pfp"
              />
              <input type="text" placeholder="What is happening?!" />
            </div>
            <div className="icons-post-wrapper">
              <div className="create-post-icons">
                <svg
                  className="verified"
                  viewBox="0 -2 24 24"
                  width="20"
                  height="20"
                  fill="#1d9bf0"
                >
                  <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                </svg>
                <svg
                  className="verified"
                  viewBox="0 -2 24 24"
                  width="20"
                  height="20"
                  fill="#1d9bf0"
                >
                  <path d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"></path>
                </svg>
                <svg
                  className="verified"
                  viewBox="0 -2 24 24"
                  width="20"
                  height="20"
                  fill="#1d9bf0"
                >
                  <path d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z"></path>
                </svg>
                <svg
                  className="verified"
                  viewBox="0 -2 24 24"
                  width="20"
                  height="20"
                  fill="#1d9bf0"
                >
                  <path d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z"></path>
                </svg>
                <svg
                  className="verified"
                  viewBox="0 -2 24 24"
                  width="20"
                  height="20"
                  fill="#1d9bf0"
                >
                  <path d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z"></path>
                </svg>
                <svg
                  className="verified"
                  viewBox="0 -2 24 24"
                  width="20"
                  height="20"
                  fill="#1d9bf0"
                >
                  <path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"></path>
                </svg>
              </div>
            </div>
            <button className="postbtn button">Post</button>
          </div>
          <div className="post-container flex-start">
            <img
              className="post-pfp-container"
              src="https://pbs.twimg.com/profile_images/1597246024522891264/HC5EAQDX_400x400.jpg"
              alt="profile"
            />
            <div className="post-text-container">
              <div className="post-username-container">
                <span>Danny Thompson</span>
                <svg
                  className="verified"
                  viewBox="-3 -4 24 24"
                  width="16"
                  fill="#1d9bf0"
                >
                  <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
                </svg>
                <span className="user-handle">@Dthompson...</span>
                <span className="post-time">&#183; 3h</span>
                <svg
                  className="options"
                  viewBox="-3 0 24 24"
                  width="16"
                  fill="grey"
                >
                  <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                </svg>
              </div>
              <p>
                If you <em>ONLY</em> know HTML and CSS it is going to be VERY
                hard to land your first job in tech as a software developer.{" "}
                <br />
                <br />
                You might have a chance to do some freelancing but the reality
                is, you are going to need to know more in order to be marketable
                in the industry.
              </p>
              <div className="post-stats-container flex-a">
                <div className="comments flex blhv">
                  <svg
                    className="comments-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                  </svg>
                  <span className="stats-span">69</span>
                </div>
                <div className="retweet flex">
                  <svg
                    className="retweet-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                  </svg>
                  <span className="stats-span">99</span>
                </div>
                <div className="like flex">
                  <svg
                    className="like-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                  </svg>
                  <span className="stats-span">420</span>
                </div>
                <div className="views flex">
                  <svg
                    className="views-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                  </svg>
                  <span className="stats-span">69420</span>
                </div>
                <div className="share">
                  <svg
                    className="share-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="post-container flex-start">
            <img
              className="post-pfp-container"
              src="https://pbs.twimg.com/profile_images/1582668146229616640/LbZIR8E4_400x400.jpg"
              alt="profile"
            />
            <div className="post-text-container">
              <div className="post-username-container">
                <span>Ali</span>
                <svg
                  className="verified"
                  viewBox="-3 -4 24 24"
                  width="16"
                  fill="#1d9bf0"
                >
                  <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
                </svg>
                <span className="user-handle">@alicalimli...</span>
                <span className="post-time">&#183; 5m</span>
                <svg
                  className="options"
                  viewBox="-3 0 24 24"
                  width="16"
                  fill="grey"
                >
                  <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                </svg>
              </div>
              <p>
                On my day 1 on tech twitter. I hesitated a lot weather to hit
                tweet or not. <br />
                <br />
                Because I thought i'd be judged, but i did it anyways. <br />
                <br />
                And everytime i tweet, it becomes easier and easier. <br />
                <br />
                First step is always the hardest part, but it gets easier after.
              </p>
              <div className="post-stats-container flex-a">
                <div className="comments flex">
                  <svg
                    className="comments-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                  </svg>
                  <span className="stats-span">5</span>
                </div>
                <div className="retweet flex">
                  <svg
                    className="retweet-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                  </svg>
                  <span className="stats-span">9</span>
                </div>
                <div className="like flex">
                  <svg
                    className="like-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                  </svg>
                  <span className="stats-span">40</span>
                </div>
                <div className="views flex">
                  <svg
                    className="views-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                  </svg>
                  <span className="stats-span">318</span>
                </div>
                <div className="share">
                  <svg
                    className="share-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="post-container flex-start">
            <img
              className="post-pfp-container"
              src="https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg"
              alt="profile"
            />
            <div className="post-text-container">
              <div className="post-username-container">
                <span>Elon Musk</span>
                <svg
                  className="verified"
                  viewBox="-3 -4 24 24"
                  width="16"
                  fill="#1d9bf0"
                >
                  <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
                </svg>
                <span className="user-handle">@elonmusk</span>
                <span className="post-time">&#183; 1h</span>
                <svg
                  className="options"
                  viewBox="-3 0 24 24"
                  width="16"
                  fill="grey"
                >
                  <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                </svg>
              </div>
              <img
                className="post-images"
                src="https://pbs.twimg.com/media/F3a6rhwXgAAP11-?format=webp&name=small"
                alt="nilesh-post"
              />
              <div className="post-stats-container flex-a">
                <div className="comments flex">
                  <svg
                    className="comments-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                  </svg>
                  <span className="stats-span">201</span>
                </div>
                <div className="retweet flex">
                  <svg
                    className="retweet-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                  </svg>
                  <span className="stats-span">69K</span>
                </div>
                <div className="like flex">
                  <svg
                    className="like-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                  </svg>
                  <span className="stats-span">699K</span>
                </div>
                <div className="views flex">
                  <svg
                    className="views-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                  </svg>
                  <span className="stats-span">42M</span>
                </div>
                <div className="share">
                  <svg
                    className="share-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="post-container flex-start">
            <img
              className="post-pfp-container"
              src="https://pbs.twimg.com/profile_images/1575870473652559873/GngqKmbT_400x400.jpg"
              alt="profile"
            />
            <div className="post-text-container">
              <div className="post-username-container">
                <span>pransh</span>
                <span className="user-handle">@inmypranshoes</span>
                <span className="post-time">&#183; 1h</span>
                <svg
                  className="options"
                  viewBox="-3 0 24 24"
                  width="16"
                  fill="grey"
                >
                  <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                </svg>
              </div>
              <p>munnabhai energy</p>
              <img
                className="post-images"
                src="https://pbs.twimg.com/media/F3en1wGWMAAOeB_?format=jpg&name=900x900"
                alt="pranshu"
              />
              <div className="post-stats-container flex-a">
                <div className="comments flex">
                  <svg
                    className="comments-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                  </svg>
                  <span className="stats-span">19</span>
                </div>
                <div className="retweet flex">
                  <svg
                    className="retweet-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                  </svg>
                  <span className="stats-span">69</span>
                </div>
                <div className="like flex">
                  <svg
                    className="like-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                  </svg>
                  <span className="stats-span">42</span>
                </div>
                <div className="views flex">
                  <svg
                    className="views-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                  </svg>
                  <span className="stats-span">969</span>
                </div>
                <div className="share">
                  <svg
                    className="share-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="post-container flex-start">
            <img
              className="post-pfp-container"
              src="https://pbs.twimg.com/profile_images/1617044903636123650/pYUcGGOu_400x400.jpg"
              alt="profile"
            />
            <div className="post-text-container">
              <div className="post-username-container">
                <span>Francesco</span>
                <svg
                  className="verified"
                  viewBox="-3 -4 24 24"
                  width="16"
                  fill="#1d9bf0"
                >
                  <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
                </svg>
                <span className="user-handle">@FrancescoCiull4</span>
                <span className="post-time">&#183; 48m</span>
                <svg
                  className="options"
                  viewBox="-3 0 24 24"
                  width="16"
                  fill="grey"
                >
                  <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                </svg>
              </div>
              <p>
                Working hard can have a big impact on your life and increases
                your chances of success tremendously. <br />
                <br />
                This is even more important in TECH. <br />
                <br />
                But balancing hard work with well-deserved rest is what will
                truly make your life better. <br />
                <br />
                We are not machines and need to take a break from...
                <span className="hash" color="var(--blue)">
                  Show more
                </span>
              </p>
              <img
                className="post-images"
                src="https://pbs.twimg.com/media/F3fCl1daEAAzYOf?format=webp&name=900x900"
                alt="francesco image"
              />
              <div className="post-stats-container flex-a">
                <div className="comments flex">
                  <svg
                    className="comments-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                  </svg>
                  <span className="stats-span">169</span>
                </div>
                <div className="retweet flex">
                  <svg
                    className="retweet-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                  </svg>
                  <span className="stats-span">307</span>
                </div>
                <div className="like flex">
                  <svg
                    className="like-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                  </svg>
                  <span className="stats-span">1071</span>
                </div>
                <div className="views flex">
                  <svg
                    className="views-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                  </svg>
                  <span className="stats-span">1.1M</span>
                </div>
                <div className="share">
                  <svg
                    className="share-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="post-container flex-start">
            <img
              className="post-pfp-container"
              src="https://pbs.twimg.com/profile_images/1644730077224267776/5R7iKRFc_400x400.jpg"
              alt="profile"
            />
            <div className="post-text-container">
              <div className="post-username-container">
                <span>priyankar ⚡</span>
                <span className="user-handle">@Priyankarpal</span>
                <span className="post-time">&#183; Aug 12</span>
                <svg
                  className="options"
                  viewBox="-3 0 24 24"
                  width="16"
                  fill="grey"
                >
                  <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                </svg>
              </div>
              <p>So folks 😺</p>
              <div className="flex-start flex-wrap">
                <img
                  className="post-images img-size-fix"
                  src="https://pbs.twimg.com/media/F3Tc6mjaMAAZluI?format=webp&name=small"
                  alt="priyankar image"
                />
                <img
                  className="post-images img-size-fix"
                  src="https://pbs.twimg.com/media/F3S1-gSaQAAqFwB?format=webp&name=small"
                  alt="priyankar image"
                />
              </div>
              <div className="post-stats-container flex-a">
                <div className="comments flex">
                  <svg
                    className="comments-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                  </svg>
                  <span className="stats-span">189</span>
                </div>
                <div className="retweet flex">
                  <svg
                    className="retweet-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                  </svg>
                  <span className="stats-span">14</span>
                </div>
                <div className="like flex">
                  <svg
                    className="like-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                  </svg>
                  <span className="stats-span">1007</span>
                </div>
                <div className="views flex">
                  <svg
                    className="views-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                  </svg>
                  <span className="stats-span">478K</span>
                </div>
                <div className="share">
                  <svg
                    className="share-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="post-container flex-start">
            <img
              className="post-pfp-container"
              src="https://pbs.twimg.com/profile_images/1631384398754095104/Cky8PLmE_400x400.jpg"
              alt="profile"
            />
            <div className="post-text-container">
              <div className="post-username-container">
                <span>LV Nilesh</span>
                <svg
                  className="verified"
                  viewBox="-3 -4 24 24"
                  width="20"
                  fill="#1d9bf0"
                >
                  <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
                </svg>
                <span className="user-handle">@LVNilesh</span>
                <span className="post-time">&#183; 1h</span>
                <svg
                  className="options"
                  viewBox="-3 0 24 24"
                  width="16"
                  fill="grey"
                >
                  <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                </svg>
              </div>
              <p>
                <span className="hash">#thecloudseminar</span> participants
                discussing irl
              </p>
              <img
                className="post-images"
                src="https://pbs.twimg.com/media/F3i0E9HbEAAqJ40?format=png&name=medium"
                alt="nilesh-post"
              />
              <div className="post-stats-container flex-a">
                <div className="comments flex">
                  <svg
                    className="comments-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                  </svg>
                  <span className="stats-span">19</span>
                </div>
                <div className="retweet flex">
                  <svg
                    className="retweet-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                  </svg>
                  <span className="stats-span">69</span>
                </div>
                <div className="like flex">
                  <svg
                    className="like-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                  </svg>
                  <span className="stats-span">42</span>
                </div>
                <div className="views flex">
                  <svg
                    className="views-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                  </svg>
                  <span className="stats-span">969</span>
                </div>
                <div className="share">
                  <svg
                    className="share-icon"
                    viewBox="0 0 24 24"
                    width="18"
                    fill="grey"
                  >
                    <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="load-more">
            <h3>Load more</h3>
          </div>
        </section>
        <aside className="flex flex-col self-start right sticky top-[-224px]">
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

import React from "react";
import NavBar from "./components/navBar";
import SideBar from "./components/sideBar";
import pfp1 from "../media/basketball-profile.jpg";
import pfp2 from "../media/butterfly.jpg";

const Notifications = () => {
  return (
    <>
      <NavBar id="nav8" />
      <SideBar />

      <div className="text-prim fw-bold col-12 col-md-9 ms-auto">
        <p className="fs-4 my-4 my-md-5 text-center col position-relative">
          <button
            className="btn col-2 p-0 position-absolute d-md-none"
            data-bs-target="#sidebar"
            data-bs-toggle="offcanvas"
            style={{ left: 0 }}
          >
            <span className="fa fa-bars"></span>
          </button>
          Notifications
        </p>

        <div className="bg-second px-4 px-md-5 row">
          <img
            src={pfp1}
            style={{ width: 30, height: 30 }}
            alt=""
            className="rounded-circle p-0 my-1 ms-md-5 col-1"
          />
          <span className="my-auto ms-2 col p-0">Arin viewed your post</span>
          <div
            className="p-1 rounded-circle ms-auto bg-prim col-1 my-auto"
            style={{ width: 2, height: 2 }}
          ></div>
        </div>

        <div className="bg-second px-4 px-md-5 row">
          <img
            src={pfp2}
            style={{ width: 30, height: 30 }}
            alt=""
            className="rounded-circle p-0 my-1 ms-md-5 col-1"
          />
          <span className="my-auto ms-2 col p-0">
            Miss Demi viewed your post
          </span>
          <div
            className="p-1 rounded-circle ms-auto bg-prim col-1 my-auto"
            style={{ width: 2, height: 2 }}
          ></div>
        </div>

        <div className="bg-second px-4 px-md-5 row">
          <img
            src={pfp1}
            style={{ width: 30, height: 30 }}
            alt=""
            className="rounded-circle p-0 my-1 ms-md-5 col-1"
          />
          <span className="my-auto ms-2 col p-0">
            Mike Oshoffa viewed your post
          </span>
          <div
            className="p-1 rounded-circle ms-auto bg-prim col-1 my-auto"
            style={{ width: 2, height: 2 }}
          ></div>
        </div>

        <div className="bg-second px-4 px-md-5 row">
          <img
            src={pfp1}
            style={{ width: 30, height: 30 }}
            alt=""
            className="rounded-circle p-0 my-1 ms-md-5 col-1"
          />
          <span className="my-auto ms-2 col p-0">Tiara viewed your post</span>
          <div
            className="p-1 rounded-circle ms-auto bg-prim col-1 my-auto"
            style={{ width: 2, height: 2 }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Notifications;

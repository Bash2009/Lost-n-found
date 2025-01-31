import React from "react";
import NavBar from "./components/navBar";
import SideBar from "./components/sideBar";
import pfp from "../media/basketball-profile.jpg";

const ProfilePage = () => {
  return (
    <>
      <NavBar id="nav6" />
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
          User Details
        </p>

        <img
          src={pfp}
          style={{ width: "10rem", height: "10rem" }}
          alt="Profile"
          className="rounded-circle mx-auto my-2 row d-md-none"
        />

        <p className="p-0 ps-1 mb-1 mt-2">Username</p>
        <div className="bg-second text-black p-0 py-2 ps-1">Jane Doe</div>

        <p className="p-0 ps-1 mb-1 mt-2">Email Address</p>
        <div className="bg-second text-black p-0 py-2 ps-1">
          janedoe23@yahoo.com
        </div>

        <p className="p-0 ps-1 mb-1 mt-2">Phone number</p>
        <div className="bg-second text-black p-0 py-2 ps-1">08192406396</div>

        <p className="p-0 ps-1 mb-1 mt-5 pt-3">
          For enquiries and more information, contact us at:
        </p>
        <div className="bg-second p-0 py-2 ps-1">
          www.lostandfoundfeedback.com
        </div>
      </div>
    </>
  );
};

export default ProfilePage;

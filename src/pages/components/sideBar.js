import React from "react";
import { Link } from "react-router-dom";
import pfp from "../../media/basketball-profile.jpg";

const SideBar = (props) => {
  return (
    <>
      <div
        className="row col-4 col-md-3 text-prim fw-bold bg-primary m-0 offcanvas offcanvas-start"
        id="sidebar"
      >
        <button
          className="btn text-white col-2 py-3"
          data-bs-dismiss="offcanvas"
        >
          X
        </button>
        <Link
          to="/Profile"
          className="col-12 bg-second text-prim text-decoration-none mt-1 m-0 row"
        >
          <span data-bs-dismiss="offcanvas" className="col-12 py-3">
            User Details
          </span>
        </Link>
        <Link
          to="/Notifications"
          className="col-12 bg-second text-prim text-decoration-none m-0 mt-1 row"
        >
          <span data-bs-dismiss="offcanvas" className="col-12 py-3">
            Notification<span className="far fa-bell"></span>
          </span>
        </Link>
        <Link
          className="col-12 bg-second text-prim text-decoration-none m-0 mt-1 row"
          to="/MyUploads"
        >
          <span data-bs-dismiss="offcanvas" className="col-12 py-3">
            My Uploads
          </span>
        </Link>
        <Link className="col-12 bg-second text-prim text-decoration-none m-0 mt-1 row">
          <span data-bs-dismiss="offcanvas" className="col-12 py-3">
            Feedback
          </span>
        </Link>
      </div>

      <div
        className="row pt-3 col-4 col-md-3 text-prim fw-bold bg-prim m-0 d-none d-md-block"
        style={{ position: "fixed", bottom: 0, top: 0, zIndex: 1 }}
      >
        <img
          src={pfp}
          style={{ width: "10rem", height: "8rem" }}
          alt="Profile"
          className="rounded-circle mx-auto my-5 row"
        />

        <Link
          to="/Profile"
          className="col-12 bg-second py-3 text-prim text-decoration-none mt-1 d-block"
        >
          User Details
        </Link>
        <Link
          to="/Notifications"
          className="col-12 bg-second py-3 text-prim text-decoration-none mt-1 d-block"
        >
          Notification<span className="far fa-bell"></span>
        </Link>
        <Link
          to="/MyUploads"
          className="col-12 bg-second py-3 text-prim text-decoration-none mt-1 d-block"
        >
          My Uploads
        </Link>
        <Link className="col-12 bg-second py-3 text-prim text-decoration-none mt-1 d-block">
          Feedback
        </Link>
      </div>
    </>
  );
};

export default SideBar;

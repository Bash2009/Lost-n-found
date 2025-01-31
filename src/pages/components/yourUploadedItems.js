import React from "react";

const YourUploads = (props) => {
  const content = props.content;

  const styles = {
    background: "url(" + content.pic + ")",
    backgroundSize: "100%",
    backgroundPosition: "center",
  };

  return (
    <>
      <div
        className="row col-12 text-prim mb-1 m-0"
        style={{ background: "rgb(200,200,200)" }}
      >
        <div style={styles} className="col-4 col-md-2 p-4"></div>
        <div className="col-8 col-md-10 p-0 ps-3 row">
          <p className="fs-4 fw-bold border-bottom border-prim py-2 p-0 mb-2">
            {content.title}
          </p>

          <div className="border-bottom border-prim">
            <p className="m-0 col-md-7">
              {content.time !== undefined ? "Uploaded at " + content.time : ""}
            </p>
            <p className="m-0 mb-2 col-md-5 text-decoration-underline">
              {content.status}
            </p>
          </div>
        </div>
        <div className="col-5 p-0 ps-3 my-auto">
          <span className="fa fa-users"></span>
          {content.views} views
        </div>

        <input type="checkbox" className="col-1 my-2" checked readOnly />
        <span className="col-4 col-md-2 p-0 my-auto">Completed</span>
      </div>
    </>
  );
};

export default YourUploads;

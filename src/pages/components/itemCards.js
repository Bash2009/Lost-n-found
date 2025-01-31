import React from "react";

const ItemCards = (props) => {
  const styles = {
    background: "url(" + props.pic + ")",
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

        <div className="col p-0 ps-3">
          <p className="fs-4 fw-bold border-bottom border-primary py-2 p-0 mb-2">
            {props.children}
          </p>
          <p className="m-0">
            Uploaded by
            <img
              src={props.pfp}
              style={{ width: 30, height: 30 }}
              alt=""
              className="rounded-circle"
            />
            {" " + props.uploader}{" "}
            {props.time !== undefined ? "at " + props.time : ""}
          </p>
          <p className="m-0 mb-2 text-decoration-underline">{props.status}</p>
        </div>
      </div>
    </>
  );
};

export default ItemCards;

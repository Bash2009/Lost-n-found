import React from "react";
import back1 from "../../media/homepage1.jpg";
import { Link } from "react-router-dom";

const MainHead = () => {
  const styles = {
    background: "url(" + back1 + ")",
    backgroundSize: "100%",
    backgroundPosition: "center",
  };

  return (
    <>
      <div style={styles} className="p-3 p-md-5 row col-12 m-0">
        <Link to="/LostItemForm" className="btn btn-primary m-2 mx-auto col-7">
          Report a lost item
        </Link>
        <Link to="/FoundItemForm" className="btn btn-primary m-2 mx-auto col-7">
          Report a found item
        </Link>
      </div>
    </>
  );
};

export default MainHead;

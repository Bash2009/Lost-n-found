import React from "react";
import NavBar from "./components/navBar";

const SearchPage = () => {
  const styles = {
    input: {
      background: "rgb(200,200,200)",
    },
  };

  return (
    <>
      <NavBar id="nav4" />
      <div className="col-10 col-md-8 mx-auto my-5 pt-5">
        <input className="form-control border border-primary rounded-4 p-2" type="search" style={styles.input} />
      </div>
    </>
  );
};

export default SearchPage;

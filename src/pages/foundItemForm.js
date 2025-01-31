import React from "react";
import NavBar from "./components/navBar";
import ItemForm from "./components/itemForm";

const FoundItemsForm = () => {
  return (
    <>
      <NavBar id="nav2" />
      <ItemForm state="Found" />
    </>
  );
};

export default FoundItemsForm;

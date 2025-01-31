import React from "react";
import NavBar from "./components/navBar";
import ItemForm from "./components/itemForm";

const LostItemsForm = () => {
  return (
    <>
      <NavBar id="nav3" />
      <ItemForm state="Lost" />
    </>
  );
};

export default LostItemsForm;

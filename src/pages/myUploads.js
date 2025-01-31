import React, { useState } from "react";
import NavBar from "./components/navBar";
import SideBar from "./components/sideBar";
import YourUploads from "./components/yourUploadedItems";
import item1 from "../media/black-bottle-2.jpg";
import item2 from "../media/some-necklace.jpg";
import item3 from "../media/trucker-hat-1.jpg";
import item4 from "../media/trucker-hat-2.jpg";

const MyUploads = () => {
  const [cards, setCards] = useState([
    {
      contents: {
        title: "Black bottle",
        time: "14:20pm 24/1/25",
        views: "300",
        status: "Found",
        pic: item1,
      },
      id: "item1",
    },

    {
      contents: {
        title: "Gold Necklace",
        time: "11:30am 19/1/25",
        views: "20",
        status: "Lost",
        pic: item2,
      },
      id: "item2",
    },

    {
      contents: {
        title: "Orange Trucker hat",
        time: "12:40pm 17/1/25",
        views: "25",
        status: "Lost",
        pic: item3,
      },
      id: "item3",
    },

    {
      contents: {
        title: "White-Green Trucker hat",
        time: "20:40pm 5/1/25",
        views: "97",
        status: "Lost",
        pic: item4,
      },
      id: "item4",
    },
  ]);

  return (
    <>
      <NavBar id="nav7" />
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
          My Uploads
        </p>

        <div>
          {cards.map((card) => {
            return <YourUploads key={card.id} content={card.contents} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MyUploads;

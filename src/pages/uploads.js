import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import NavBar from "./components/navBar";
import ItemCards from "./components/itemCards";

import item1 from "../media/birken-sandals.jpg";
import item2 from "../media/black-bottle-2.jpg";
import item3 from "../media/flannel-shirt.jpg";
import item4 from "../media/keys.jpg";
import item5 from "../media/black-bracelet-2.jpg";
import item6 from "../media/black-bracelet-1.jpg";
import item7 from "../media/peace-profile.jpg";
import item8 from "../media/butterfly.jpg";
import item9 from "../media/nike-slides.jpg";

import pfp1 from "../media/female-profile-1.jpg";
import pfp2 from "../media/female-profile-2.jpg";
import pfp3 from "../media/male-profile-1.jpg";
import pfp4 from "../media/mj-2.jpg";
import pfp5 from "../media/peace-profile.jpg";
import pfp6 from "../media/flower-profile.jpg";
import pfp7 from "../media/butterfly-profile-2.jpg";
import pfp8 from "../media/girl-profile-2.jpg";
import pfp9 from "../media/basketball-profile.jpg";

const Uploads = () => {
  const [cards, setCards] = useState([
    {
      title: "Birkenstock slides",
      pic: item1,
      uploader: "Abike Lawal",
      pfp: pfp1,
      status: "Found",
      key: "item1",
      type: "Clothing",
    },

    {
      title: "Black bottle",
      pic: item2,
      uploader: "Jane Doe",
      pfp: pfp2,
      status: "Found",
      key: "item2",
      type: "Others",
    },

    {
      title: "Flannel shirt",
      pic: item3,
      uploader: "Mainey M",
      pfp: pfp3,
      status: "Lost",
      key: "item3",
      type: "Clothing",
    },

    {
      title: "Keys",
      pic: item4,
      uploader: "Joseph Jack",
      pfp: pfp4,
      status: "Found",
      key: "item4",
      type: "Others",
    },

    {
      title: "Beaded Bracelet",
      pic: item5,
      uploader: "Rainey R",
      pfp: pfp5,
      status: "Lost",
      key: "item5",
      type: "Clothing",
    },

    {
      title: "Chunky Beaded Bracelet",
      pic: item6,
      uploader: "Renee Ray",
      pfp: pfp6,
      status: "Found",
      key: "item6",
      type: "Clothing",
    },

    {
      title: "A Redmi phone",
      pic: item7,
      uploader: "Frances Okafor",
      pfp: pfp7,
      status: "Lost",
      key: "item7",
      type: "Electronics",
    },

    {
      title: "Black-Gold Rimmed Glasses",
      pic: item8,
      uploader: "Korra Saddie",
      pfp: pfp8,
      status: "Lost",
      key: "item8",
      type: "Clothing",
    },

    {
        title: "Slides",
        pic: item9,
        uploader: "Mike Oshoffa",
        pfp: pfp9,
        status: "Found",
        key: "item9",
        type: "Clothing",
      },
  ]);

  const [filteredCards, setFilteredCards] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const filterParam = location.state?.filter;

    if (filterParam === "Electronics") {
      setFilteredCards(cards.filter((room) => room.type === "Electronics"));
    } else if (filterParam === "Clothing") {
      setFilteredCards(cards.filter((room) => room.type === "Clothing"));
    } else if (filterParam === "Others") {
      setFilteredCards(cards.filter((room) => room.type === "Others"));
    } else {
      setFilteredCards(cards);
    }
  }, [location.state, cards]);

  return (
    <>
      <NavBar />
      <div className="mt-5">
        <p className="text-center text-prim fw-bold fs-4">All Uploads</p>
        <p
          className="text-prim fw-bold fs-4"
          data-bs-toggle="dropdown"
          data-bs-target="#nav-dropdown"
        >
          Categories <span className="fa fa-filter"></span>
        </p>

        <ul className="dropdown-menu position-absolute" id="filter-dropdown">
          <li>
            <Link
              to="/Uploads"
              state={{ filter: "Electronics" }}
              className="dropdown-item"
            >
              Electronics & Devices
            </Link>
          </li>
          <li>
            <Link
              to="/Uploads"
              state={{ filter: "Clothing" }}
              className="dropdown-item"
            >
              Clothing & accesssories
            </Link>
          </li>
          <li>
            <Link
              to="/Uploads"
              state={{ filter: "Others" }}
              className="dropdown-item"
            >
              Others
            </Link>
          </li>
          <li>
            <Link
              to="/Uploads"
              state={{ filter: "All" }}
              className="dropdown-item"
            >
              All uploads
            </Link>
          </li>
        </ul>

        {filteredCards.map((card) => {
          return (
            <ItemCards
              key={card.key}
              pic={card.pic}
              uploader={card.uploader}
              pfp={card.pfp}
              time={card.time}
              status={card.status}
            >
              {card.title}
            </ItemCards>
          );
        })}
      </div>
    </>
  );
};

export default Uploads;

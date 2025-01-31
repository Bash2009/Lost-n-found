import React, { Component } from "react";
import NavBar from "./components/navBar";
import MainHead from "./components/mainHead";
import ItemCards from "./components/itemCards";
import item1 from "../media/calculator.jpg";
import pfp1 from "../media/butterfly.jpg";
import item2 from "../media/calculator.jpg";
import pfp2 from "../media/basketball-profile.jpg";
import item3 from "../media/black-bottle.jpg";
import pfp3 from "../media/mj-1.jpg";

class HomePage extends Component {
  state = {
    itemsInfo: [
      {
        title: "Casio Scientific Calculator",
        pic: item1,
        uploader: "Miss Demi",
        pfp: pfp1,
        status: "Found",
        time: "14:20 today",
        key: "item1",
      },

      {
        title: "Sec1 Earbuds",
        pic: item2,
        uploader: "Mike Oshoffa",
        pfp: pfp2,
        status: "Lost",
        time: "15:00 today",
        key: "item2",
      },

      {
        title: "Black Water Bottle",
        pic: item3,
        uploader: "Applehead",
        pfp: pfp3,
        status: "Lost",
        time: "15:32 today",
        key: "item3",
      },
    ],
  };

  render() {
    return (
      <>
        <NavBar id="nav1" />
        <MainHead />

        <div>
          <p className="fw-bold text-prim fs-5 my-1">Recently Uploaded</p>
          {this.state.itemsInfo.map((info) => {
            return (
              <ItemCards
                key={info.key}
                pic={info.pic}
                uploader={info.uploader}
                pfp={info.pfp}
                time={info.time}
                status={info.status}
              >
                {info.title}
              </ItemCards>
            );
          })}
        </div>
      </>
    );
  }
}

export default HomePage;

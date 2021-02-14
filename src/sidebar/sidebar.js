import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import PageviewIcon from "@material-ui/icons/Pageview";
import "./section.css";
import Section from "./section";
const Sidebar = () => {
  return (
    <div>
      <h2 className="stats">Customer Stats</h2>
      <div className="sidebar">
        <Section number="4M" text="All Visitors" icon={<HomeIcon />} />
        <Section number="22 " text="Unique Visitors" icon={<FaceIcon />} />
        <Section
          number="650"
          text="Bounce Rate"
          icon={<TransferWithinAStationIcon />}
        />
        <Section number="1.2M" text="Page Views" icon={<PageviewIcon />} />
      </div>
    </div>
  );
};

export default Sidebar;

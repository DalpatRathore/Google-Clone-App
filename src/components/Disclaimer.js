import React from "react";
import "./Disclaimer.css";
import WarningRoundedIcon from "@material-ui/icons/WarningRounded";
import AdjustRoundedIcon from "@material-ui/icons/AdjustRounded";

const Disclaimer = ({ cloneAppName }) => {
  return (
    <div className="disclaimer">
      <p className="disclaimer__text disclaimer__text--warning ">
        <WarningRoundedIcon></WarningRoundedIcon>
        <strong>DISCLAIMER:</strong> This website is {cloneAppName} Clone not
        the original {cloneAppName}.
      </p>
      <p className="disclaimer__text">
        <AdjustRoundedIcon></AdjustRoundedIcon>
        <strong>OBJECTIVE: </strong>
        Purpose of making this {cloneAppName} Clone Application is to showcase
        Programming Skills.
      </p>
      <span className="disclaimer__toolTip">Box Draggable</span>
    </div>
  );
};

export default Disclaimer;

import React from "react";
import "./Widget.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("IT industry", "Top news - 9099 reader")}
      {newsArticle("Coronavirus: India", "Top news - 886 reader")}
      {newsArticle("Amazon", "Amazon - 8000 reader")}
      {newsArticle("JavaScript", "Coding - 120000 reader")}
      {newsArticle("Space x", "Elon Musk - 300 reader")}
    </div>
  );
};

export default Widgets;

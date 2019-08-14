import React from "react";
import "./header.css";


// const Header = ({ score, children, topScore }) => {}

const Header = props => {
  const { score, children, topScore } = props
  console.log(score)
  return (
  <div className="header">
    <div className="title">{children}</div>
    <div className="scores">
      Score: {score} Highscore: {topScore}
    </div>
  </div>
  )
};

export default Header;
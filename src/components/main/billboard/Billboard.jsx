import React from "react";
import "./Billboard.css";
import BillboardRow from "./BillboardRow";

const Billboard = ({ discover, randomIndex }) => {
  return (
    <div className="billboard">
      <BillboardRow discover={discover} randomIndex={randomIndex} />
    </div>
  );
};

export default Billboard;

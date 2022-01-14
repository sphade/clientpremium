import React from "react";

//Custom Imports
import AvailablePrivateJets from "./AvailablePrivateJets";
import LeftFilter from "./LeftFilter";
import TopFilter from "./TopFilter";

const CharterPage = () => {
  return (
    <div className="air-charter">
      <TopFilter />
      <div className="air-charter__content">
        <div className="flex center">
          <LeftFilter />
          <AvailablePrivateJets />
        </div>
      </div>
    </div>
  );
};

export default CharterPage;

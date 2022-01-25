import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PrimaryButton, CustomAlert, Tabpane } from "../../../reusables";
import { APP_ROUTES } from "../../../routes/path";
import { ECharterType } from "./types";
import AirCharterFilter from "./Widgets/AirCharterFilter";
import LandCharterFilter from "./Widgets/LandCharterFilter";
import SeaCharterFilter from "./Widgets/SeaCharterFilter";

const Charter = () => {
  const [currentCharter, setCurrentCharter] = useState("air");

  const onTabChange = (value: string) => {
    const charterType = value.split(" ")[0].toLocaleLowerCase();
    setCurrentCharter(charterType);
  };

  return (
    <div className="charter" id="find-charter">
      <div className="center">
        <CustomAlert
          hasIcon
          header="Trip Charter Time"
          content={[
            " All charter activities should be made at least 24 hours before pick up time.",
          ]}
        />

        <div className="charter__content">
          <h3 className="charter__content--header">Find Charters</h3>
          <Tabpane
            onChange={onTabChange}
            list={["Air Charter", "Sea Charter", "Land Charter"]}
          />
          <div>
            {currentCharter === ECharterType.air && (
              <AirCharterFilter type={currentCharter} />
            )}
            {currentCharter === ECharterType.land && (
              <LandCharterFilter type={currentCharter} />
            )}
            {currentCharter === ECharterType.sea && (
              <SeaCharterFilter type={currentCharter} />
            )}
          </div>

          <div className="action__button">
            <Link to={APP_ROUTES.charter(currentCharter)}>
              <PrimaryButton label="search" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charter;

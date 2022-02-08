import { useFormik } from "formik";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { PrimaryButton, CustomAlert, Tabpane } from "../../../reusables";
import { APP_ROUTES } from "../../../routes/path";
import { charterValidation } from "../../../validations";
import { TCharter } from "../../../validations/types";
import { ECharterType } from "./types";
import AirCharterFilter from "./Widgets/AirCharterFilter";
import LandCharterFilter from "./Widgets/LandCharterFilter";
import SeaCharterFilter from "./Widgets/SeaCharterFilter";

const Charter = () => {
  const history = useHistory();
  const [currentCharter, setCurrentCharter] = useState("air");

  const onTabChange = (value: string) => {
    const charterType = value.split(" ")[0].toLocaleLowerCase();
    setCurrentCharter(charterType);
  };

  // Instantiate formik
  const formik = useFormik({
    initialValues: {
      pickup: "",
      destination: "",
      departureDate: "",
      departureTime: "",
      returnDate: "",
      passenger: 1,
      tripType: "",
      transitType: "",
      duration: 1,
    },
    onSubmit: async (values) => {
      history.push(APP_ROUTES.charter(currentCharter), {
        ...values,
        charterType: currentCharter,
      });
    },
    validationSchema: charterValidation({ type: currentCharter as TCharter }),
  });

  const { handleSubmit, isValid, dirty } = formik;

  const isDisabled = !(isValid && dirty);

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
              <AirCharterFilter type={currentCharter} formik={formik} />
            )}
            {currentCharter === ECharterType.land && (
              <LandCharterFilter type={currentCharter} formik={formik} />
            )}
            {currentCharter === ECharterType.sea && (
              <SeaCharterFilter type={currentCharter} formik={formik} />
            )}
          </div>

          <div className="action__button">
            <PrimaryButton
              disabled={isDisabled}
              label="search"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charter;

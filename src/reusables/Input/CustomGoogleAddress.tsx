/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { PrimaryInput } from ".";
import { TextFieldProps } from "@mui/material";
import { ICustomFormikProps, PrimaryInputProps } from "./types";
import useGlobalStoreProvider from "../../context";
import { CharterReducerActions } from "../../context/reducers/actions";

const { MUTATE_CHARTER } = CharterReducerActions;

const apiKey = process.env.GOOGLE_API_KEY || "";

const loader = new Loader({
  apiKey,
  version: "weekly",
  libraries: ["places"],
});

const CustomGoogleAddress = (
  props: PrimaryInputProps &
    TextFieldProps & {
      isPickup?: boolean;
      handleFilters?: (filter: any) => void;
    }
) => {
  const searchInput = useRef(null);

  const { formik, name, isPickup, handleFilters } = props;

  const { errors = {}, touched } = formik as ICustomFormikProps;

  const { dispatch } = useGlobalStoreProvider();

  const extractAddress = (place: any) => {
    const address = {
      city: "",
      state: "",
      country: "",
      name: "",
      tempName: "",
    };

    if (!Array.isArray(place?.address_components)) {
      return address;
    }

    place?.address_components.forEach((component: any) => {
      const types = component?.types;
      const value = component?.long_name;

      if (
        types.includes("locality") ||
        types.includes("administrative_area_level_1")
      ) {
        address.state = value;
      }
    });

    address.name = `${place?.formatted_address || ""} `;

    if (formik) {
      const { setFieldValue } = formik;
      setFieldValue(name, address.name);
      setFieldValue("state", address.state);
    }

    if (isPickup) {
      dispatch({
        type: MUTATE_CHARTER,
        payload: { [name]: address.name || "" },
      });
      handleFilters && handleFilters({ from: address.state || "" });
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangeAddress = (autocomplete: any) => {
    const location = autocomplete.getPlace();
    extractAddress(location);
  };

  const initAutoComplete = () => {
    if (!searchInput.current || !apiKey) return;
    loader
      .load()
      .then((google) => {
        const autocomplete = new google.maps.places.Autocomplete(
          searchInput.current
        );

        autocomplete.setFields([
          "address_component",
          "formatted_address",
          "name",
        ]);
        autocomplete.setComponentRestrictions({ country: "NG" });
        autocomplete.addListener("place_changed", () =>
          onChangeAddress(autocomplete)
        );
      })
      .catch((e) => {
        // do something
      });
  };

  // function getPlacePredictions(input) {
  //   if (searchInput !== null) {
  //     (searchInput)!.current.getPlacePredictions({ input }, (predictions) => {
  //       setPredictions(predictions.map((prediction) => prediction.description));
  //     });
  //   }
  // }

  useEffect(() => {
    initAutoComplete();
  }, []);

  return <PrimaryInput {...props} inputRef={searchInput} />;
};

export default CustomGoogleAddress;

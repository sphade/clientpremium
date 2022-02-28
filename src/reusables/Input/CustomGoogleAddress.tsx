/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { PrimaryInput } from ".";
import { TextFieldProps } from "@mui/material";
import { PrimaryInputProps } from "./types";

const apiKey = process.env.GOOGLE_API_KEY || "";

const loader = new Loader({
  apiKey,
  version: "weekly",
  libraries: ["places"],
});

const CustomGoogleAddress = (props: PrimaryInputProps & TextFieldProps) => {
  const searchInput = useRef(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangeAddress = (autocomplete: any) => {
    // const location = autocomplete.getPlace();
  };

  const initAutoComplete = () => {
    if (!searchInput.current || !apiKey) return;
    loader
      .load()
      .then((google) => {
        const autocomplete = new google.maps.places.Autocomplete(
          searchInput.current
        );

        autocomplete.setFields(["address_component", "geometry", "name"]);
        autocomplete.setComponentRestrictions({ country: "NG" });
        autocomplete.addListener("place_changed", () =>
          onChangeAddress(autocomplete)
        );
      })
      .catch((e) => {
        console.log(e);
        // do something
      });
  };

  useEffect(() => {
    initAutoComplete();
  }, []);

  return <PrimaryInput {...props} inputRef={searchInput} />;
};

export default CustomGoogleAddress;

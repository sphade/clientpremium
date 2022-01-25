import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { PrimaryInput } from ".";
import { TextFieldProps } from "@mui/material";

import { PrimaryInputProps } from "./";

const loader = new Loader({
  apiKey: process.env.GOOGLE_API_KEY || "",
  version: "weekly",
  libraries: ["places"],
});

const CustomGoogleAddress = (props: PrimaryInputProps & TextFieldProps) => {
  const searchInput = useRef(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangeAddress = (autocomplete: any) => {
    const location = autocomplete.getPlace();
    console.log(location);
  };

  const initAutoComplete = () => {
    if (!searchInput.current) return;
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

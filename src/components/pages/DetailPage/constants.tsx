/* eslint-disable @typescript-eslint/no-explicit-any */
import { compact } from "lodash";
import React from "react";
import { ReactComponent as ArrowLeftIcon } from "../../../assets/svgs/arrow-left.svg";
import { ReactComponent as ArrowRightIcon } from "../../../assets/svgs/arrow-right.svg";
import { CharterType } from "../../../hooks/types";

export const detailBannerSummary = (isLand = false) =>
  compact([
    isLand && {
      title: isLand ? "Rates Per day" : "Max range",
      value: isLand ? "N120,000" : "6000 nm",
      key: isLand ? "price" : "maxRange",
    },
    {
      title: "Year built",
      value: "2016",
      key: "year",
    },
    isLand && {
      title: "Cabin Length",
      value: "43 ft 3 in",
      key: "cabinLength",
    },
    {
      title: isLand ? "Capacity" : "Guests",
      value: "14",
      key: "capacity",
    },
    {
      title: "Baggage capacity",
      value: "1000 lbs",
      key: "baggageCapacity",
    },
  ]);

export const detailSpecifications = {
  performance: {
    title: "Performance",
    content: [
      {
        key: "Flight hours",
        value: "13:00",
      },
      {
        key: "Max range",
        value: "6000 nm",
      },
      {
        key: "Max speed",
        value: "0.89 Mach",
      },
      {
        key: "Max altitude",
        value: "51,000 ft",
      },
    ],
  },
  interior: {
    title: "Interior",
    content: [
      {
        key: "Passengers",
        value: `
                14 | 7 sleeping`,
      },

      {
        key: "Cabin length",
        value: "43 ft 3 in",
      },
      {
        key: "Cabin height",
        value: "6 ft 2 in",
      },
      {
        key: "Cabin width",
        value: "7 ft 11 in",
      },
      {
        key: "Baggage capacity",
        value: "7 ft 11 in (max)",
      },
    ],
  },
};

export const specifications = (
  charterType = "LAND",
  data: Record<string, any> = {}
) => {
  const isLand = charterType === CharterType.LAND;
  const isAir = charterType === CharterType.AIR;

  const booleanAnswer = (answer: boolean) => (answer ? "Yes" : "No");

  const {
    cabinLength = 0,
    cabinHeight = 0,
    capacity = 0,
    maxAltitude = 0,
    baggageCapacity = 0,
    maxRange = 0,
    maxSpeed = 0,
    flightHours = 0,
    isBulletproof = false,
    isTinted = false,
    sunRoof = false,
    innerCabin = false,
    type = "yatch",
  } = data;

  const airPerformance = [
    {
      key: "flight hours",
      value: `${flightHours}`,
    },
    {
      key: "max Range ",
      value: `${maxRange} nm`,
    },
    {
      key: "max speed",
      value: `${maxSpeed} Mach`,
    },
    {
      key: "Max altitude",
      value: `${maxAltitude} ft`,
    },
  ];

  const airInterior = [
    {
      key: "passengers",
      value: `${capacity} sleeping`,
    },
    {
      key: "cabin length",
      value: `${cabinLength} in`,
    },
    {
      key: "cabin height",
      value: `${cabinHeight} in`,
    },
  ];
  const airOthers = [
    {
      key: "baggage capacity",
      value: `${baggageCapacity} (max)`,
    },
  ];

  const carOthers = [
    {
      key: "Bullet Proof",
      value: `${booleanAnswer(isBulletproof)}`,
    },
    {
      key: "Tinted",
      value: `${booleanAnswer(isTinted)}`,
    },
  ];
  const carInterior = [
    {
      key: "passengers",
      value: `${capacity} sleeping`,
    },
  ];
  const seaInterior = [
    {
      key: "Sun Roof",
      value: `${booleanAnswer(sunRoof)}`,
    },
    {
      key: "Inner Cabin",
      value: `${booleanAnswer(innerCabin)}`,
    },
  ];
  const seaOthers = [
    {
      key: "Type",
      value: `${type}`,
    },
  ];

  return {
    performance: isAir ? airPerformance : [],
    interior: isAir ? airInterior : isLand ? carInterior : seaInterior,
    others: isAir ? airOthers : isLand ? carOthers : seaOthers,
  };
};

export const featuredSliderSettings = (list: any[]) => ({
  infinite: true,
  className: "outside-slick",
  speed: 500,

  responsive: [
    {
      breakpoint: 2024,
      settings: {
        slidesToShow: list.length > 2 ? 3 : list.length,
        infinite: true,
        // variableWidth: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: list.length > 1 ? 2 : list.length,
        className: "custom-slick",
      },
    },
    {
      breakpoint: 480,
      settings: {
        className: "custom-slick",
        slidesToShow: 1,
        dots: true,
      },
    },
  ],

  nextArrow: <ArrowRightIcon />,
  prevArrow: <ArrowLeftIcon />,
});

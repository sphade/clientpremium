/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import Slider from "react-slick";

import { useFetchFeaturedItems } from "../../../hooks";
import { formatNumberToCurrency } from "../../../utils";
import { featuredSliderSettings } from "./constants";
import { Link } from "react-router-dom";

const FeaturedItems = () => {
  const { data, text } = useFetchFeaturedItems();

  return (
    <div className="featured-item">
      <div className="featured-item__slider center">
        <h3>FEATURED {text.toUpperCase()}</h3>
        <Slider {...featuredSliderSettings(data)}>
          {data.map(
            ({
              brand = "",
              ProductImages = [],
              id = "",
              location = "",
              capacity = "",
              price = "",
              year = "",
            }: {
              brand: string;
              ProductImages: any[];
              id: string;
              description?: string;
              location?: string;
              capacity?: string;
              price?: string;
              year?: string;
            }) => (
              <Link to={`${id}`} key={id}>
                <div className="featured-item__slider--card max-w-[500px]">
                  <img src={ProductImages[0]?.url} alt="plane" />
                  <div className="slider-card-content">
                    <h5>{brand}</h5>
                    <p>
                      Rate from {formatNumberToCurrency({ number: price })} per
                      trip
                    </p>
                    <p>
                      Location: {location} | Built: {year} | Guests: {capacity}
                    </p>
                  </div>
                </div>
              </Link>
            )
          )}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedItems;

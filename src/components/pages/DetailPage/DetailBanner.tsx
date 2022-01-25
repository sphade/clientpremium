/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";

import { ReactComponent as ArrowLeft } from "../../../assets/svgs/outline-arrow-left.svg";
import { ReactComponent as ArrowLeftIcon } from "../../../assets/svgs/arrow-left.svg";
import { ReactComponent as ArrowRightIcon } from "../../../assets/svgs/arrow-right.svg";

import { PrimaryButton } from "../../../reusables";
import { detailBannerSummary } from "./constants";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../../routes/path";
import { useCheckCharterType } from "../../../hooks";
import { formatNumberToCurrency } from "../../../utils";

const settings = {
  infinite: true,
  className: "custom-slick",
  speed: 500,
  centerPadding: "28%",

  slidesToShow: 1,

  responsive: [
    {
      breakpoint: 2024,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        dots: true,
      },
    },
  ],

  nextArrow: <ArrowRightIcon />,
  prevArrow: <ArrowLeftIcon />,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DetailBanner = ({ charter }: { charter: Record<string, any> }) => {
  const { isLand, isSea, charterType } = useCheckCharterType();

  const {
    isAvailable = true,
    brand = "",
    model = "",
    builder = "",
    ProductImages = [],
  } = charter;

  const charterName = `${builder} ${brand} ${model}`;

  const history = useHistory();

  return (
    <article className="detail-banner">
      <div className="center detail-banner__header">
        <div onClick={() => history.goBack()}>
          <ArrowLeft />
          <h3 style={{ textTransform: "uppercase" }}>{charterName}</h3>
        </div>
        {isAvailable && (
          <Link
            to={APP_ROUTES.getBookingSummaryPrimary({
              type: charterType.toLowerCase(),
              id: charter.id,
            })}
          >
            <PrimaryButton
              label={`Charter ${isLand ? "Car" : isSea ? "Boat" : "Flight"}`}
            />
          </Link>
        )}
      </div>
      <div className="detail-banner__hero">
        <div className="detail-banner__hero--images">
          <Slider {...settings}>
            {ProductImages.map((image: Record<string, any>) => (
              <div key={image?.id} className="center-slider">
                <img src={image.url} alt="plane" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="detail-banner__hero--titles center">
          {detailBannerSummary(isLand).map(({ title, key }, id) => (
            <div className="single-title" key={id}>
              <p>{title}</p>
              <h3>
                {key === "price"
                  ? formatNumberToCurrency({ number: charter[key] })
                  : charter[key]}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default DetailBanner;

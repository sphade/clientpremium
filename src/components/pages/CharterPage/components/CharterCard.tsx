/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import { ReactComponent as ArrowLeftIcon } from "../../../../assets/svgs/arrow-left.svg";
import { ReactComponent as ArrowRightIcon } from "../../../../assets/svgs/arrow-right.svg";
import { ReactComponent as LightBoxCamera } from "../../../../assets/svgs/lightbox-camera.svg";
import { formatNumberToCurrency } from "../../../../utils";
import { OutlineButton, PrimaryButton } from "../../../../reusables";
import { APP_ROUTES } from "../../../../routes/path";
import { useCheckCharterType } from "../../../../hooks";

export const singleSettings = {
  infinite: true,
  speed: 500,
  className: "custom-slick",
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <ArrowRightIcon />,
  prevArrow: <ArrowLeftIcon />,
};

const CharterCard = ({
  item,
  handleCharterCar,
  handleLightBoxView,
}: {
  item: Record<string, any>;
  handleCharterCar: ({ item }: { item: any }) => void;
  handleLightBoxView: ({ item, index }: { item: any; index: number }) => void;
}) => {
  const { isLand, charterType, isSea } = useCheckCharterType();

  return (
    <div className="charter-card">
      <div className="charter-card__content">
        <div className="charter-card__content--title">
          <h4>
            {item.brand || item?.builder} {item.model}
          </h4>
          <h4>{formatNumberToCurrency({ number: item.price })}/Hour</h4>
        </div>
        <div className="charter-card__content--stats">
          <p>
            <span className="bold">Range:</span> {item.maxRange} nm
          </p>
          <p>
            <span className="bold">Speed:</span> {item.maxSpeed} kts
          </p>
          <p>
            <span className="bold">Passengers: </span> {item.capacity}
          </p>
          <p>
            <span className="bold">Year:</span> {item.year}
          </p>
        </div>
        <div className="button-group">
          <PrimaryButton
            onClick={() => handleCharterCar({ item })}
            label={`Charter ${isLand ? "Car" : isSea ? "Boat" : "Flight"}`}
            small
          />
          <Link
            to={APP_ROUTES.charterDetailPage(
              charterType.toLowerCase(),
              item.id
            )}
          >
            <OutlineButton
              label={`${isLand ? "Car" : isSea ? "Boat" : "Jet"} Details`}
              small
            />
          </Link>
        </div>
      </div>
      <div className="charter-card__image !relative border">
        <Slider {...singleSettings}>
          {item?.ProductImages.map((image: any, index: number) => (
            <img
              onClick={() => {
                handleLightBoxView({ item, index });
              }}
              key={image.id}
              src={image.url}
              alt="plane"
            />
          ))}
        </Slider>
        <div className="lightbox__camera">
          <LightBoxCamera />
        </div>
      </div>
    </div>
  );
};

export default CharterCard;

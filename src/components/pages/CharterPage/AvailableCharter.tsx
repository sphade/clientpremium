/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { OutlineButton, PrimaryButton } from "../../../reusables";
import { ReactComponent as ArrowLeftIcon } from "../../../assets/svgs/arrow-left.svg";
import { ReactComponent as ArrowRightIcon } from "../../../assets/svgs/arrow-right.svg";
import { APP_ROUTES } from "../../../routes/path";
import { useCheckCharterType } from "../../../hooks";
import { formatNumberToCurrency } from "../../../utils";

export const singleSettings = {
  infinite: true,
  speed: 500,
  className: "custom-slick",
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <ArrowRightIcon />,
  prevArrow: <ArrowLeftIcon />,
};

const AvailableCharter = ({ charter }: { charter: Record<string, any> }) => {
  const { isLand, charterType, isSea } = useCheckCharterType();

  return (
    <div className="private-jets">
      <h3 className="private-jets__title">
        AVAILABLE {isLand ? "CARS" : "PRIVATE JETS"}{" "}
      </h3>

      {charter.map((item: any, index: number) => (
        <div key={index} className="charter-card">
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
              <Link
                to={APP_ROUTES.getBookingSummaryPrimary({
                  type: charterType.toLowerCase(),
                  id: item.id,
                })}
              >
                <PrimaryButton
                  label={`Charter ${
                    isLand ? "Car" : isSea ? "Boat" : "Flight"
                  }`}
                  small
                />
              </Link>
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
          <div className="charter-card__image">
            <Slider {...singleSettings}>
              {item?.ProductImages.map((image: any) => (
                <img key={image.id} src={image.url} alt="plane" />
              ))}
            </Slider>
          </div>
        </div>
      ))}

      <div className="private-jets__footer">
        <p className="private-jets__footer--sumary">Showing 4 from 12 Jets</p>
        <div className="private-jets__footer--buttons">
          <button>
            <span>{"<<"}</span>
            <span>Previous</span>
          </button>

          <div className="paginations">
            <h3 className="active">1</h3>
            <h3>2</h3>
            <h3>3</h3>
          </div>
          <button>
            <span>Next</span>
            <span>{">>"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailableCharter;

import React, { Fragment } from "react";
import clsx from "clsx";
import { ArrowButton, PrimaryButton, ScrollButton } from "../../../reusables";
import PlaneBanner from "../../../assets/images/hero.jpg";
import SeaBanner from "../../../assets/images/sea-banner.jpg";
import LandBanner from "../../../assets/images/land-banner.jpg";

type BannerType = {
  images?: string[];
  headers?: string[];
  subtitle?: string;
  hasButton?: boolean;
  scrollId?: string;
  canSwitch?: boolean;
};

const Banner = ({
  images = [LandBanner, SeaBanner, PlaneBanner],
  headers = ["EXPERIENCE PREMIUM", "LUXURY ON THE GO"],
  subtitle = "Enjoy the comfort and pleasure of executive VVIP service, 24/7 travel support.",
  hasButton = true,
  scrollId = "find-charter",
  canSwitch = true,
}: BannerType): JSX.Element => {
  return (
    <div className="banner__image">
      <div className={clsx("banner__image--container", canSwitch && "switch")}>
        {images.map((image, id) => (
          <Fragment key={id}>
            <img className={`image-${id}`} src={image} />
          </Fragment>
        ))}
      </div>
      <div className="center content">
        <h3>
          {headers.map((header) => (
            <Fragment key={header}>
              <span>{header}</span>
            </Fragment>
          ))}
        </h3>
        <p>{subtitle}</p>
        {hasButton && (
          <ScrollButton toId={scrollId}>
            <PrimaryButton label="Book A Charter" />
          </ScrollButton>
        )}
        <div className="banner__arrow">
          <ScrollButton toId={scrollId}>
            <ArrowButton />
          </ScrollButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;

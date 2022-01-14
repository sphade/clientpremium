import React from "react";
import { specifications } from "./constants";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DetailContent = ({ charter }: { charter: Record<string, any> }) => {
  const { brand = "", description = "", builder = "", model = "" } = charter;

  const charterName = `${builder} ${brand} ${model}`;

  return (
    <article className="detail-content">
      <div className="center detail-content__top center">
        <h3>ABOUT {charterName?.toUpperCase()}</h3>
        <p>{description}</p>
      </div>
      <div className="center detail-content__card">
        <h3>SPECIFICATIONS</h3>
        <div className="specification">
          {Object.entries(specifications).map(([key, values]) => {
            return (
              <div className="specification__content" key={key}>
                <h3>{key !== "others" && key}</h3>
                {values.map(({ key, value }) => (
                  <div className="specification__content--property" key={key}>
                    <p>{key}</p>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default DetailContent;

import React from "react";
import BeachImage from "../../../assets/images/beach.jpg";
import { ReactComponent as NewTag } from "./../../../assets/svgs/new-tag.svg";
import { ReactComponent as UserIcon } from "./../../../assets/svgs/user.svg";

const Destinations = () => {
  return (
    <article className="destinations jumbotron">
      <div className="center">
        <div className="destinations__top">
          <div className="main__title">
            <h3 className="title text-left">Top Destinations</h3>
            <p>Bring color and excitement to you travel experience</p>
          </div>
          <div className="destinations__card--container" id="top-destinations">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="destinations__card--item">
                <div className="card__image">
                  <div className="absolute new-tag">
                    <NewTag />
                  </div>
                  <img src={BeachImage} alt="card__image" />
                  <button className="absolute button">See Boat</button>
                </div>

                <div className="card__content">
                  <h5>Parties</h5>
                  <p className="small">Mauritus</p>
                  <p>20 Nov 2021</p>
                  <p>
                    <span>
                      <UserIcon />
                    </span>
                    10 Seats
                  </p>
                  <p className="small description">
                    An island bursting with color, Mauritius is so much more
                    than a beach destination (though its white-sand shores are
                    indeed beautiful).
                  </p>
                </div>

                <div className="card__footer">
                  <p>Coming Soon</p>
                  <button>Reserve</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="destinations__top boat__activities" id="cruising">
          <div className="main__title">
            <h3 className="title text-left">Cruising</h3>
            <p>We cover all aspects of life, from parties to celebrations</p>
          </div>
          <div className="destinations__card--container">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="destinations__card--item">
                <div className="card__image">
                  <div className="absolute new-tag">
                    <NewTag />
                  </div>
                  <img src={BeachImage} alt="card__image" />
                  <button className="absolute button">See Boat</button>
                </div>

                <div className="card__content">
                  <h5>Parties</h5>
                  <p className="small">Mauritus</p>
                  <p>20 Nov 2021</p>
                  <p>
                    <span>
                      <UserIcon />
                    </span>
                    10 Seats
                  </p>
                  <p className="small description">
                    An island bursting with color, Mauritius is so much more
                    than a beach destination (though its white-sand shores are
                    indeed beautiful).
                  </p>
                </div>

                <div className="card__footer">
                  <p>Coming Soon</p>
                  <button>Reserve</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Destinations;

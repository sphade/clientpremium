import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../../reusables";
import { APP_ROUTES } from "../../../routes/path";
import Banner from "../Home/Banner";

const Home = () => {
  return (
    <div className="home">
      <Banner
        headers={["BOSSBUS", "TECHNOLOGIES"]}
        subtitle={"Learn more about us."}
        hasButton={false}
      />
      <div className="center py-44">
        <div
          className="grid grid-cols-1 md:grid-cols-2 place-content-center
        "
        >
          <h3 className="text-[7rem] font-bold self-center">About Us</h3>
          <div className="flex flex-col justify-center self-center">
            <p className="text-3xl  leading-normal mb-10  ">
              Bossbus is a tech company, poised to revolutionalise the transport
              industry. Our users are delightfully served and our partners’
              operations are efficiently optimised and monetised.
            </p>
            <Link to={APP_ROUTES.home}>
              <PrimaryButton label="Book A Charter" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

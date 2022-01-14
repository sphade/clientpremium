import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import ShortLogo from "./../../assets/svgs/logo.svg";
import FullLogo from "../../assets/images/logo-premium.png";
import { APP_ROUTES } from "../../routes/path";
import { ReactComponent as BellIcon } from "../../assets/svgs/bell-icon.svg";
import { CustomDropDown } from "..";
import { allTravelServices } from "./constant";
import useGlobalStoreProvider from "./../../context";
import ProfileDropDown from "./ProfileDropdown";

const Navbar = ({ primary = true }: { primary?: boolean }): JSX.Element => {
  const { state } = useGlobalStoreProvider();

  const {
    user: { name = "Anne Hans", photo = "" },
  } = state;

  return (
    <div className="navbar">
      <div className="center .navbar">
        <div className="navbar__brand">
          <div className="navbar__brand--left">
            <Link to={APP_ROUTES.home}>
              <img className="desktop__logo" src={FullLogo} alt="logo" />
            </Link>

            {primary && (
              <CustomDropDown
                buttonText="All travel services"
                menuItems={allTravelServices.map((menu) => (
                  <Fragment key={menu.name}>
                    {menu.isLink ? (
                      <Link to={menu.link || "/home"}>
                        <div className="nav-dropdown">
                          {menu.image && (
                            <img
                              src={menu?.image}
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          )}
                          <p>{menu.name}</p>
                        </div>
                      </Link>
                    ) : (
                      <a key={menu.name} href={menu.link || "/home"}>
                        <div className="nav-dropdown">
                          {menu.image && (
                            <img
                              src={menu.image}
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          )}
                          <p>{menu.name}</p>
                        </div>
                      </a>
                    )}
                  </Fragment>
                ))}
              />
            )}
          </div>
          {primary && (
            <div className="navbar__brand--right">
              <Badge color="error" variant="dot">
                <BellIcon />
              </Badge>

              <div className="user--profile">
                <img
                  src={photo ? photo : "https://via.placeholder.com/150"}
                  alt="user-avater"
                />
                <ProfileDropDown buttonText={name} />
              </div>
            </div>
          )}
        </div>

        <div className="navbar__brand">
          <Link to={APP_ROUTES.home}>
            <img className="mobile__logo" src={ShortLogo} alt="logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

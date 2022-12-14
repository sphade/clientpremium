import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { Badge } from "@mui/material";
import ShortLogo from "./../../assets/svgs/logo.svg";
import FullLogo from "../../assets/images/logo-premium.png";
import { APP_ROUTES } from "../../routes/path";
import { ReactComponent as BellIcon } from "../../assets/svgs/bell-icon.svg";
import { CustomDropDown } from "..";
import { allTravelServices } from "./constant";
import useGlobalStoreProvider from "./../../context";
import ProfileDropDown from "./ProfileDropdown";
import CustomerPopper from "../CustomPopper";
import NotificationBox from "../../components/pages/Home/Widgets/NotificationBox";
import UserAvatar from "../../components/pages/Profile/components/UserAvatar";

const Navbar = ({ primary = true }: { primary?: boolean }): JSX.Element => {
  const { state } = useGlobalStoreProvider();

  const {
    user: { name = "", photo = "" },
  } = state;

  const { pathname } = useLocation();

  const isHomeLink = pathname.includes("/home");

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
                menuItems={allTravelServices
                  .filter((item) => (isHomeLink ? true : !item.homeNav))
                  .map((menu) => {
                    return (
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
                    );
                  })}
              />
            )}
          </div>
          {primary && (
            <div className="navbar__brand--right">
              <CustomerPopper
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                buttonElement={
                  <Badge color="error" variant="dot">
                    <BellIcon />
                  </Badge>
                }
              >
                <NotificationBox />
              </CustomerPopper>

              <div className="user--profile">
                {photo ? (
                  <img src={photo} alt="user-avater" />
                ) : (
                  <UserAvatar small />
                )}
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

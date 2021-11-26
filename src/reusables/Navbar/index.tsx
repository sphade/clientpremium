import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
import ShortLogo from './../../assets/svgs/logo.svg';
import FullLogo from '../../assets/images/logo-premium.png';
import { APP_ROUTES } from '../../routes/path';
import { ReactComponent as BellIcon } from '../../assets/svgs/bell-icon.svg';
import Avatar from '../../assets/svgs/user-avatar.png';
import { CustomDropDown } from '..';
import { allTravelServices, userProfileMenu } from './constant';
import useGlobalStoreProvider from './../../context';

const Navbar = ({ primary = true }: { primary?: boolean }): JSX.Element => {
    const { state, logoutUser } = useGlobalStoreProvider();

    const {
        user: { name = 'Anne Hans' },
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
                                    <Link key={menu.name} to={menu.link || '/home'}>
                                        {menu.name}
                                    </Link>
                                ))}
                            />
                        )}
                    </div>
                    {primary && (
                        <div className="navbar__brand--right">
                            <p>Trips</p>
                            <Badge color="error" variant="dot">
                                <BellIcon />
                            </Badge>

                            <div className="user--profile">
                                <img src={Avatar} alt="user-avater" />
                                <CustomDropDown
                                    buttonText={name}
                                    menuItems={userProfileMenu.map((menu) =>
                                        menu.name !== 'Logout' ? (
                                            <Link key={menu.name} to={menu.link || '/home'}>
                                                {menu.name}
                                            </Link>
                                        ) : (
                                            <div onClick={logoutUser}>{menu.name}</div>
                                        ),
                                    )}
                                />
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

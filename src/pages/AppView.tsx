import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { Footer, Navbar } from '../reusables';
import { appRoutes } from '../routes';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ProtectedRoute, { PublicRoute } from '../routes/ProtectedRoutes';

const AppView = () => {
    return (
        <div className="layout">
            <Navbar />

            <Switch>
                {appRoutes.map(({ key, path, component: Component }) => (
                    <PublicRoute exact key={key} path={path} component={Component} />
                ))}
                <Redirect from="/" to="/home" />
            </Switch>
            <Footer />
        </div>
    );
};

export default AppView;

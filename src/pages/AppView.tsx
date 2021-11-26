import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { Footer, Navbar } from '../reusables';
import { appRoutes } from '../routes';
import ProtectedRoute from '../routes/ProtectedRoutes';

const AppView = () => {
    return (
        <div className="layout">
            <Navbar />

            <Switch>
                {appRoutes.map(({ key, path, component: Component }) => (
                    <ProtectedRoute exact key={key} path={path} component={Component} />
                ))}
                <Redirect from="/" to="/home" />
            </Switch>
            <Footer />
        </div>
    );
};

export default AppView;

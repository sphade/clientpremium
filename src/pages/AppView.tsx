import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Footer, Navbar } from '../reusables';
import { appRoutes } from '../routes';

const AppView = () => {
    return (
        <div className="layout">
            <Navbar />

            <Switch>
                {appRoutes.map(({ key, path, component: Component }) => (
                    <Route exact key={key} path={path} component={Component} />
                ))}
                <Redirect from="/" to="/home" />
            </Switch>
            <Footer />
        </div>
    );
};

export default AppView;

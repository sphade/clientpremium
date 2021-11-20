import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Navbar } from '../reusables';
import { routeList } from '../routes';

const AuthViews = () => {
    return (
        <div className="layout">
            <Navbar />
            <div className="main__body">
                <div className="auth__body items-center">
                    <Switch>
                        {routeList.map(({ key, path, component: Component }) => (
                            <Route exact key={key} path={path} component={Component} />
                        ))}
                        <Redirect from="/auth" to="/auth/signin" />
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default AuthViews;

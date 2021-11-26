import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { Navbar } from '../reusables';
import { routeList } from '../routes';
import { PublicRoute } from '../routes/ProtectedRoutes';

const AuthViews = () => {
    return (
        <div className="layout">
            <Navbar primary={false} />
            <div className="main__body">
                <div className="auth__body items-center">
                    <Switch>
                        {routeList.map(({ key, path, component: Component }) => (
                            <PublicRoute exact key={key} path={path} component={Component} />
                        ))}
                        <Redirect from="/auth" to="/auth/signin" />
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default AuthViews;

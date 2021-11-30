import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from '../routes/index';
import { Main } from './Main';

export const Root = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={routes.home} component={Main} />
            </Switch>
        </BrowserRouter>
    );
};

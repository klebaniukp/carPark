import { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from '../routes/index';
import { VehicleProvider } from '../context/VehicleContext';
import { HomeView } from './HomeView';
import { DetailedView } from './DetailedView';

export const Root = () => {
    return (
        <VehicleProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path={routes.home} component={HomeView} />
                    <Route
                        exact
                        path={routes.detailed}
                        component={DetailedView}
                    />
                </Switch>
            </BrowserRouter>
        </VehicleProvider>
    );
};

import { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from '../routes/index';
import { VehicleProvider } from '../context/VehicleContext';
import { HomeView } from './HomeView';

export const Root = () => {
    return (
        <VehicleProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path={routes.home} component={HomeView} />
                </Switch>
            </BrowserRouter>
        </VehicleProvider>
    );
};

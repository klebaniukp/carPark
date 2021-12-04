import { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from '../routes/index';
import { VehicleProvider } from '../context/VehicleContext';
import { FiltersProvider } from '../context/FiltersContext';
import { HomeView } from './HomeView';
import { MapView } from './MapView';

export const Root = () => {
    return (
        <VehicleProvider>
            <BrowserRouter>
                <FiltersProvider>
                    <Switch>
                        <Route exact path={routes.home} component={HomeView} />
                        <Route exact path={routes.map} component={MapView} />
                    </Switch>
                </FiltersProvider>
            </BrowserRouter>
        </VehicleProvider>
    );
};

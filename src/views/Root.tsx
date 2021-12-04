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
            <FiltersProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={routes.home} component={HomeView} />
                        <Route exact path={routes.map} component={MapView} />
                    </Switch>
                </BrowserRouter>
            </FiltersProvider>
        </VehicleProvider>
    );
};

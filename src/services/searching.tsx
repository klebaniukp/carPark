import { IVehicle } from '../types/types';

export const searching = (vehicles: IVehicle[], name: string) => {
    let returnedVehicles = new Array();

    vehicles.map((car: IVehicle) => {
        if (car.name.toLowerCase().includes(name)) {
            console.log(`succeded`);
            returnedVehicles.push(car);
        }
        return returnedVehicles;
    });

    return returnedVehicles;
};

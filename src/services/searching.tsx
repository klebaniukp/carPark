export const searching = (
    form: HTMLFormElement,
    vehicles: object[],
    name: string
) => {
    let returnedVehicles = new Array();

    vehicles.map((vehicle: any) => {    
        if (vehicle.name.toLowerCase().includes(name)) {
            console.log(`succeded`);
            returnedVehicles.push(vehicle);
        }
    });

    return returnedVehicles;
};

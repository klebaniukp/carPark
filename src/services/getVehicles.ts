import { fetchVehicles } from '../api';

export const getVehicles = async () => {
    const response = await fetchVehicles();
    const vehicles = response.data.objects;
    return vehicles;

    // fetchVehicles()
    //     .then((response) => {
    //         console.log(response.data.objects);
    //         const resData = response.data.objects;

    //         return resData;
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //         throw new Error(err);
    //     });

    // return [
    //     {
    //         address: '',
    //         batteryLevel: 0,
    //         color: '',
    //         description: '',
    //         discriminator: '',
    //         id: '',
    //         location: null,
    //         locationDescription: null,
    //         mapColor: null,
    //         metadata: null,
    //         name: '',
    //         picture: null,
    //         platesNumber: '',
    //         promotion: null,
    //         rangeKm: 0,
    //         reservation: null,
    //         reservationEnd: null,
    //         sideNumber: '',
    //         status: '',
    //         type: '',
    //     },
    // ];
};

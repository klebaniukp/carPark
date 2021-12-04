import { fetchVehicles } from '../api';

export const getVehicles = async () => {
    const response = await fetchVehicles();
    const vehicles = response.data.objects;
    return vehicles;
};

export interface IVehicle {
    address: string | null;
    batteryLevel: number;
    color: string;
    description: string | null;
    discriminator: string;
    id: string;
    location: ILocation | null;
    locationDescription: string | null;
    mapColor: IMapColor | null;
    metadata: object | null;
    name: string;
    picture: IPicture | null;
    platesNumber: string;
    promotion: string | null;
    rangeKm: number;
    reservation: string | null; //string with date
    reservationEnd: string | null; //string with date
    sideNumber: string;
    status: string; // available or not
    type: string;
}

interface ILocation {
    latitude: number;
    longitude: number;
}

interface IMapColor {
    rgb: string;
    alpha: number;
}

interface IPicture {
    id: string;
    name: string;
    extension: string | null;
    contentType: string | null;
}

export {};

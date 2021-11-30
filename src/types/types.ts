export interface IVehicle {
    address: string | null;
    batteryLevel: number;
    color: string;
    description: string | null;
    discriminator: string;
    id: string;
    location: ILocation;
    locationDescription: string | null;
    mapColor: IMapColor;
    metadata: object | null;
    name: string;
    picture: IPicture;
    platesNumber: string;
    promotion: string | null;
    rangeKm: number;
    reservation: string | null; //string with date
    reservationEnd: string | null; //string with date
    sidNumber: string;
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

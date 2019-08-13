import { ZoneDTO } from "../types/ZoneDTO";
import { Feature } from "geojson";

export interface CityDTO {
    name:string,
    coordinates: Feature,
    zone: ZoneDTO[]
}
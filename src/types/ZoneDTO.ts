import { CategoryDTO } from "./CategoryDTO";
import {Feature} from 'geojson';

export interface ZoneDTO{
    name: string,
    coordinates: Feature,
    lodging: CategoryDTO,
    food: CategoryDTO,
    leisure: CategoryDTO
}
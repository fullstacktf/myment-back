import { LocationsMongoRepository as LocationsRepository } from '../repositories/LocationsRepository';
import { Request } from 'express'
import { CityDTO } from '../../../../types/CityDTO';
import { CountryDTO } from '../../../../types/CountryDTO';
import { PlacesDTO } from '../../../../types/PlacesDTO';
//TODO: Add the express types to handle req and req 
export class LocationsController {
    private repo: LocationsRepository;
    
    constructor(repo : LocationsRepository){
        this.repo = repo;
    }
    
    private parseInputCity(data: any): CityDTO {
        return {
            name:data.name,
            coordinates: data.coordinates,
            zone: data.zone
        };
    }
    private parseResponsePlace(data:any): PlacesDTO{
        return{
            country: data.country,
            cities:data.names,
            zone:data.zone
        }
    }
    private parseInputPlace(data:any): CountryDTO{
        return {
            country:data.country,
            cities:data.cities
        }
    }
    
    public handleAddRequest(req: Request){
        const data = this.parseInputCity(req);
        return this.repo.addLocation(data)     
    }
    public async handleRequest(req: Request){
        const place = await this.repo.getAll()
        console.log(place[0])
        //place.map(item => item.country)
        return this.parseResponsePlace(place)

    }
    public handleUpdateRequest(req: Request){
        const data = this.parseInputCity(req);
        return this.repo.updateCity(data)
    }
    
    public handleDeleteRequest(req: Request){
        const data = this.parseInputCity(req);
        return this.repo.deleteCity(data);
    }
    
    public async handlePlacesRequest(body: any) {
        const [country1,country2] = await this.repo.findPlaces();
        const data = country1.cities.map(item => {
            const names =  item.name
            const zones = item.zone
            return {country:country1.country,city:names,zone:zones}
        })
        return data

    }
    public async handleLocationRequests(req: Request,){
        const data = this.parseInputCity(req);
        const response = await this.repo.findCity(data.name);
        const name = response.map(item => item.toJSON().name)
        return name

    }
    public handleCityRequests(req: Request,type: string){
        const data = this.parseInputCity(req);
        return this.repo.findCity(type);
    }
    public handleZoneRequests(req: Request,type: string){
        const data = this.parseInputCity(req);
        return this.repo.findZone(type);
    }

}

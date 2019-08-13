import { CountryModel } from '../../../data/mongodb/CountryModel';
import { SingleMongo } from '../../../data/mongodb/initMongo';
import { CityDTO } from '../../../../types/CityDTO';

export class LocationsMongoRepository {
    
    private con: SingleMongo;
    private model = CountryModel;
    
    public constructor() {
        this.con = new SingleMongo('127.0.0.1','wizard','1234','myment');
        this.con.connection.on('error', console.error.bind(console, 'connection error:'));
        this.con.connection.once('open', function() {
            console.log('We are connected');
        });
    }
    public async getConnection() {
        return await this.con.connection;
    }
    
    public async getAll() {
        return await this.model.find({});
    }
    
    public async addLocation(data:CityDTO){
        if(await this.model.exists(data))
        return {error:'Data yet exist'}
        return await this.model.create(data)
    }
    public async updateCity(data: CityDTO) {
        if(await this.model.exists(data))
        return {error:'Data yet exist'}
        return await this.model.update(data,"")
    }
    public async deleteCity(data: CityDTO) {
        return this.model.deleteOne({data});
    }
    public async findPlaces() {
        //const location = this.model.find({"country":{$nin:[""]}})
        const location = this.model.find({"country":{$nin:[""]}})
        return await location
    }
    public async findCity(type: string) {
        const cities = this.model.find({"name":type},{"cities":""});
        return await cities
    }
    public async findZone(type: string) {
        const zone = this.model.find({"category":type},"zone");
        return await zone
    }
}

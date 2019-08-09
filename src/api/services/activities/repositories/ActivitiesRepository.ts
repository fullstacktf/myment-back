import { Activity } from '../../../data/mongodb/ActivityModel';
import { SingleMongo } from '../../../data/mongodb/initMongo';
import { ActivityDTO } from 'ActivityDTO';

export class ActivitiesMongoRepository {
    
    private con: SingleMongo;
    private model = Activity;
    
    public constructor() {
        this.con = new SingleMongo('127.0.0.1', 'movies');
        this.con.connection.on('error', console.error.bind(console, 'connection error:'));
        this.con.connection.once('open', function() {
            console.log('We are connected');
        });
    }
    public async getConnection() {
        return await this.con.connection;
    }
    
    public async showAll() {
        //TODO: put Limits
        return await this.model.find();
    }
    
    public async addActivities(data:ActivityDTO){
        //Check if exist
        if(await this.model.exists(data))
        return {error:'Data yet exist'}
        
        return await this.model.create(data)
    }
    public async updateActivity(data: ActivityDTO) {
        //Check if exist
        if(await this.model.exists(data))
        return {error:'Data yet exist'}
        
        
        throw new Error("Method not implemented.");
    }
    public async deleteActivities(data: ActivityDTO) {
        throw new Error("Method not implemented.");
    }
    public async findBy(type: string, data: ActivityDTO) {
        throw new Error("Method not implemented.");
    }
}

import { Activity } from '../../../data/mongodb/ActivityModel';
import { SingleMongo } from '../../../data/mongodb/initMongo';
import { IdeaDTO } from 'IdeaDTO';

export class ActivitiesMongoRepository {
    
    private con: SingleMongo;
    private model = Activity;
    
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
        return await this.model.find({}).limit(10);
    }
    
    public async addActivities(data:IdeaDTO){
        //Check if exist
        if(await this.model.exists(data))
        return {error:'Data yet exist'}
        
        return await this.model.create(data)
    }
    public async updateActivity(data: IdeaDTO) {
        //Check if exist
        if(await this.model.exists(data))
        return {error:'Data yet exist'}
        
        
        throw new Error("Method not implemented.");
    }
    public async deleteActivities(data: IdeaDTO) {
        throw new Error("Method not implemented.");
    }
    public async findIdeas(type: string) {
    return await this.model.find({"category":type},"ideas");
    }
}

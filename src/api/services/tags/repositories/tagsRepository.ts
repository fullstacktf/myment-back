import { TagModel } from '../../../data/mongodb/TagModel';
import { SingleMongo } from '../../../data/mongodb/initMongo';
import { TagDTO } from '../../../../types/TagDTO';

export class TagsMongoRepository{

    private con: SingleMongo;
    private model = TagModel;
    
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
    public async showAll(){
        return await this.model.find({})
    }
    public async addTag(data:TagDTO){
        //Check if exist
        if(await this.model.exists(data))
        return {error:'Data yet exist'}
        
        return await this.model.create(data)
    }
    public async updateTag(data: TagDTO) {
        //Check if exist
        if(await this.model.exists(data))
        return {error:'Data yet exist'}
        
        
        throw new Error("Method not implemented.");
    }
    public async deleteTag(data: TagDTO) {
        throw new Error("Method not implemented.");
    }
    public async findByCategory(category:any) {    
        return await this.model.where("category",category)  
    }
}
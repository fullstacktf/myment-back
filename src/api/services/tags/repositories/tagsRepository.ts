import { TagModel } from '../../../data/mongodb/TagModel';
import { SingleMongo } from '../../../data/mongodb/initMongo';
import { TagDTO } from 'TagDTO';

export class TagsRepository{

    private con: SingleMongo;
    private model = TagModel;
    
    public constructor() {
        this.con = new SingleMongo('127.0.0.1', 'movies');
        this.con.connection.on('error', console.error.bind(console, 'connection error:'));
        this.con.connection.once('open', function() {
            console.log('We are connected');
        });
    }
    public async showAll(){
        return await this.model.find({})
    }
}
import {TagsRepository} from '../repositories/tagsRepository'
import { TagDTO } from "TagDTO";

export class TagsController{
    private repo: TagsRepository;
    
    constructor(repo : TagsRepository){
        this.repo = repo;
    }
    private parseInput(data: any): TagDTO {
        return {
            name: data.name,
        };
    }
    // public showAll(){
    //     return this.repo.showAll();
    // }
    public handleRequest(req: Request){
        const data = this.parseInput(req);
        return this.repo.showAll()
    }
    public handleAddRequest(req: Request){
        const data = this.parseInput(req);
        return this.repo.addTag(data)     
    }
    public handleSearchRequest(req:Request){
        const data = this.parseInput(req);
        const q = req.query.q;
        const options = {        
            storeName: {
            $regex: new RegExp(q),
        },
        identifier:{
            _id: 0,
            __v: 0,
        }
        }
        return this.repo.findBy('cities',data)
    }
    
}
import {TagsMongoRepository as TagsRepository} from '../repositories/tagsRepository'
import { TagDTO } from "../../../../types/TagDTO";

export class TagsController{
    private repo: TagsRepository;
    
    constructor(repo : TagsRepository){
        this.repo = repo;
    }
    private parseInput(data: any): TagDTO {
        return {
            name: data.name,
            category:data.category
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
    }
    
}
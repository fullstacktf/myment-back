import {TagsMongoRepository as TagsRepository} from '../repositories/tagsRepository'
import { TagDTO } from "../../../../types/TagDTO";
import { SearchDTO } from "../../../../types/SearchDTO";


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
    private parseCategory(data:any): SearchDTO{
        return {
            category: data.category
        }
    }

    public handleRequest(req: Request){
        const data = this.parseInput(req);
        return this.repo.showAll()
    }
    public handleCategoryRequest(req: Request){
        const data = this.parseCategory(req);
        console.log(data)
        return this.repo.findByCategory(data.category)     
    }
    public handleSearchRequest(req:Request){
        const data = this.parseInput(req);
        return this.repo.deleteTag(data)
    }
    
}
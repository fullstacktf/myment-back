import { ActivitiesMongoRepository as ActivitiesRepository } from '../repositories/ActivitiesRepository';
import { IdeaDTO } from '../../../../types/IdeaDTO';
import { Request } from 'express'
//TODO: Add the express types to handle req and req 
export class ActivitiesController {
    private repo: ActivitiesRepository;
    
    constructor(repo : ActivitiesRepository){
        this.repo = repo;
    }
    
    private parseInput(data: any): IdeaDTO {
        return {
            location: {name:data.name,zone:data.zone},
            name: data.name,
            description: data.description,
            coordinates: data.coordinates,
            startTime:  data.startTime,
            endTime: data.endTime,
            link: data.link
        };
    }
    private parseRequest(data:any): string{
        return data.category
    }
    
    public handleAddRequest(req: Request){
        console.log("request",req)
        const data = this.parseInput(req);
        console.log("data",data)
        return this.repo.addActivities(data)     
    }
    public handleRequest(req: Request){
        console.log("request",req)
        const data = this.parseInput(req);
        console.log("data",data)
        return this.repo.getAll()
    }
    public handleUpdateRequest(req: Request){
        const data = this.parseInput(req);
        return this.repo.updateActivity(data)
    }
    
    public handleDeleteRequest(req: Request){
        const data = this.parseInput(req);
        return this.repo.deleteActivities(data);
    }
    
    public handleCategoryRequests(req: Request){
        console.log("request",req)
        const category = this.parseRequest(req)
        console.log("data",category)
        return this.repo.findByCategory(category);
    }
    public async handleIdeasRequests(req: Request){
        console.log("request",req)
        const category = this.parseRequest(req)
        console.log("data",category)        
        const ideas = await this.repo.findIdeas(category)
        console.log("ideas",ideas)
        return ideas[0].get("ideas")
    }

}

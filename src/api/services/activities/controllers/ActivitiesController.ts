import { ActivitiesMongoRepository as ActivitiesRepository } from '../repositories/ActivitiesRepository';
import { IdeaDTO } from 'IdeaDTO';
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
    
    public handleAddRequest(req: Request){
        const data = this.parseInput(req);
        return this.repo.addActivities(data)     
    }
    public handleRequest(req: Request){
        const data = this.parseInput(req);
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
    
    public handleCategoryRequests(req: Request,type: string){
        const data = this.parseInput(req);
        return this.repo.findByCategory(type);
    }
    public handleIdeasRequests(req: Request,type: string){
        const data = this.parseInput(req);
        return this.repo.findIdeas(type);
    }

}

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
            title: data.title,
            year: data.year,
            genre: data.genre,
            duration: data.duration,
        };
    }
    
    public handleAddRequest(req: Request){
        const data = this.parseInput(req);
        return this.repo.addActivities(data)     
    }
    public handleRequest(req: Request){
        const data = this.parseInput(req);
        return this.repo.showAll()
    }
    public handleUpdateRequest(req: Request){
        const data = this.parseInput(req);
        return this.repo.updateActivity(data)
    }
    
    public handleDeleteRequest(req: Request){
        const data = this.parseInput(req);
        return this.repo.deleteActivities(data);
    }
    
    public handleRequests(req: Request,type: string){
        const data = this.parseInput(req);
        return this.repo.findBy(type,data);
    }
    public async handleLikeRequest(req: Request) {
        throw new Error("Method not implemented.");
    }
}

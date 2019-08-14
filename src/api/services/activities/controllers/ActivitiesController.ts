import { ActivitiesMongoRepository as ActivitiesRepository } from '../repositories/ActivitiesRepository';
import { IdeaDTO } from '../../../../types/IdeaDTO';
import { Request } from 'express'
import { FindDTO } from '../../../../types/FindDTO';
//TODO: Add the express types to handle req and req 
export class ActivitiesController {

    private repo: ActivitiesRepository;
    
    constructor(repo : ActivitiesRepository){
        this.repo = repo;
    }
    
    private parseInput(data: any): IdeaDTO {
        return {
            locations: {country:data.country,city:data.city,zone:data.zone},
            name: data.name,
            description: data.description,
            loc: data.coordinates,
            startTime:  data.startTime,
            endTime: data.endTime,
            link: data.link,
            tags:data.tags
        };
    }

    private parseFindRequest(data:any): FindDTO{
        return {
            country : data.country,
            city: data.city,
            zone: data.zone,
            tags: data.tags
        };
    }

    private parseRequest(data:any): string{
        return data.category;
    }
    public async handleFindRequests(body: any) {
        console.log(body)
        const data = this.parseFindRequest(body)
        async function getData(i,repo){
            return await repo.findByLocation(data.country,data.city,data.zone,data.tags[i])
        }
        const result= []
        for(var i = 0; i< data.tags.length;i++){
            result.push( await getData(i,this.repo))
        }
        return await [].concat(...result)
    }
    public handleAddRequest(req: Request){
        const data = this.parseInput(req);
        return this.repo.addActivities(data)     
    }
    public handleRequest(){
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
        const category = this.parseRequest(req)
        return this.repo.findByCategory(category);
    }
    public async handleIdeasRequests(req: Request){
        console.log("request",req)
        const category = this.parseRequest(req)
        console.log("data",category)        
        const ideas = await this.repo.findByCategoryIdeas(category)
        console.log("ideas",ideas)
        return ideas[0].get("ideas")
    }

}

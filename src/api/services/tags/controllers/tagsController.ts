import { response } from "express";
import {TagsRepository} from '../repositories/tagsRepository'

export class TagsController{
    private repo: TagsRepository;
    
    constructor(repo : TagsRepository){
        this.repo = repo;
    }
    public async showAll(){
        return this.repo.showAll();
    }
}
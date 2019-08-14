import {Feature} from 'geojson'

export interface IdeaDTO {
    locations: {country:string,city:string,zone:string}
    name: string,
    description: string,
    loc: Feature
    startTime:  {hour:number,minutes:number},
    endTime: {hour:number,minutes:number},
    link: string,
    tags:[string],
}

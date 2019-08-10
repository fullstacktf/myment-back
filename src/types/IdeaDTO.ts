import {Feature} from 'geojson'

export interface IdeaDTO {
    location: {name:string,zone:string}
    name: string,
    description: string,
    coordinates: Feature
    startTime:  number[],
    endTime: number[],
    link: string
}

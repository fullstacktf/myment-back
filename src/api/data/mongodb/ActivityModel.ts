import { Document, Model, model, Schema } from 'mongoose';
import { IdeaDTO } from '../../../types/IdeaDTO';

export interface ActivityModel extends IdeaDTO, Document {
    searchNear(): string[]
}

export const LocSchema:Schema = new Schema({
    country:String,
    city:String,
    zone:String
})

export const ActivitySchema: Schema = new Schema({
    locations: LocSchema,
    category:String,
    color:String,
    name: String,
    description: String,
    loc: {type:String,coordinates:[Number,Number]},
    startTime:  {hour:Number,minutes:Number},
    endTime: {hour:Number,minutes:Number},
    tags:Array,
    link: String
});

ActivitySchema.methods.searchNear = function():string[]{
    return this.name
  }

export const Activity: Model<ActivityModel> = model<ActivityModel>('activities', ActivitySchema);

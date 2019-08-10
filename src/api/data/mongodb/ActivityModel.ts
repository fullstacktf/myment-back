import { Document, Model, model, Schema } from 'mongoose';
import { IdeaDTO } from '../../../types/IdeaDTO';

export interface ActivityModel extends IdeaDTO, Document {
    searchNear(): string[]
}
export const ActivitySchema: Schema = new Schema({
    location: Schema.Types.Mixed,
    name: String,
    description: String,
    coordinates: Schema.Types.Mixed,
    startTime:  [Number],
    endTime: [Number],
    link: String
});

ActivitySchema.methods.searchNear = function():string[]{
    return this.name
  }

export const Activity: Model<ActivityModel> = model<ActivityModel>('activities', ActivitySchema);

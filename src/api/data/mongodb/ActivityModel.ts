import { Document, Model, model, Schema } from 'mongoose';
import { ActivityDTO } from '../../../types/ActivityDTO';

export interface ActivityModel extends ActivityDTO, Document {
    getTitleAndYear(): string;
}
export const ActivitySchema: Schema = new Schema({
    title: String,
    year: Number,
    genre: [String],
    duration: Number,
});

ActivitySchema.methods.getTitleAndYear = function(): string {
    return this.title + ' ' + this.duration;
};

export const Activity: Model<ActivityModel> = model<ActivityModel>('movies', ActivitySchema);

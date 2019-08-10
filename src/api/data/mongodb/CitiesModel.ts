import { Document, Model, model, Schema } from 'mongoose';
import { CityDTO } from '../../../types/CityDTO';

export interface CitiesModel extends CityDTO, Document {
    getZones(): string[];
}
export const CitiesSchema: Schema = new Schema({
    coordinates: Schema.Types.Mixed,
    zone: Schema.Types.Mixed
});

CitiesSchema.methods.getZones = function(): string {
    return this.name;
};

export const Activity: Model<CitiesModel> = model<CitiesModel>('movies', CitiesSchema);

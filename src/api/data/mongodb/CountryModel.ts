import { Document, Model, model, Schema,SchemaTypes } from 'mongoose';
import { CountryDTO } from '../../../types/CountryDTO';

export interface CountryModel extends CountryDTO, Document {
    getZones(): string[];
}

export const ZoneSchema: Schema = new Schema({
    name:String,
    loc: { type: String, coordinates:[[[SchemaTypes.Decimal128,SchemaTypes.Decimal128]]]}
})

export const CitySchema: Schema = new Schema({
    name: String,
    loc: { type: String, coordinates:[[[SchemaTypes.Decimal128,SchemaTypes.Decimal128]]]},
    zone: [ZoneSchema]
})

export const CountrySchema: Schema = new Schema({
    country: String,
    cities: [CitySchema]
});

CountrySchema.methods.getZones = function(): string {
    return this.name;
};

export const CountryModel: Model<CountryModel> = model<CountryModel>('locations', CountrySchema);

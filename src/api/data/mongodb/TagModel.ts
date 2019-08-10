// Tag model
import { Document, Model, model, Schema } from 'mongoose';
import { TagDTO } from '../../../types/TagDTO';

export interface TagModel extends TagDTO, Document{
  
}
const TagSchema = new Schema({
  name: String,
  category: [String],
  
});



export const TagModel: Model<TagModel> = model<TagModel>('tags', TagSchema); // The Tag model represent the tag collection



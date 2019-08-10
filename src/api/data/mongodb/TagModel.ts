// Tag model
import { Document, Model, model, Schema } from 'mongoose';
import { TagDTO } from '../../../types/TagDTO';

export interface TagModel extends TagDTO, Document{
  searchNear(): string[]
}
// Create tag Schema
const TagSchema = new Schema({
  tag: String,
  required: [true, "tag field is required"]
  
});

// Create Model
export const TagModel: Model<TagModel> = model<TagModel>('tags', TagSchema); // The Tag model represent the tag collection
// We want our objects within this collection to be structured based on this TagSchema
// Mongoose pluralize tag for us, creates a collection called "tags"



// Tag model
const mongoose = require("mongoose");

// Variable to store our Schema class in
const Schema = mongoose.Schema;

// create geolocation Schema
const GeoSchema = new Schema({
  type: {
      type: String,
      default: 'Point'
  },
  coordinates: {
      type: [Number],
      index: '2dsphere'
  }
});

// Create tag Schema
const TagSchema = new Schema({
  tag: {
    type: String,
    required: [true, "tag field is required"]
  },
  geometry: GeoSchema
  // add in geo location
});

// Create Model
const Tag = mongoose.model("tag", TagSchema); // The Tag model represent the tag collection
// We want our objects within this collection to be structured based on this TagSchema
// Mongoose pluralize tag for us, creates a collection called "tags"

module.exports = Tag;
// Export this model

// GeoSchema model
const mongoose = require('mongoose');

// Variable to store our Schema class in
const Schema = mongoose.Schema;

// create geolocation Schema
const GeoSchema = new Schema({
  type: {
    type: String,
    default: 'Point',
  },
  coordinates: {
    type: [Number],
    index: '2dsphere',
  },
});

// Create Model
const Geo = mongoose.model('tag', GeoSchema); // The GeoSchema model represent the tag collection
// We want our objects within this collection to be structured based on this TagSchema
// Mongoose pluralize tag for us, creates a collection called "tags"

module.exports = Geo;
// Export this model

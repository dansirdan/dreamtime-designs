const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gallerySchema = new Schema({
  title: { type: String, required: true },
  medium: { type: [String], required: true },
  size: { type: String, required: true },
  description: String,
  path: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const gallery = mongoose.model('gallery', gallerySchema);

module.exports = gallery;

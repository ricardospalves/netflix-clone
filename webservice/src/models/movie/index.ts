import mongoose, { Schema } from 'mongoose'

const schema = new Schema({
  title: String,
  type: String,
  cover: String,
  logo: String,
  thumb: String,
  description: String,
  genres: [String],
  cast: [String],
  scene_moments: [String],
})

export const Movie = mongoose.model('Movie', schema)

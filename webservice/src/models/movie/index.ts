import mongoose, { Schema } from 'mongoose'

const schema = new Schema({
  title: String,
  genres: [String],
  cast: [String],
  cover: String,
  thumb: String,
  description: String,
  logo: String,
  scenes: Array,
})

export const Movie = mongoose.model('Movie', schema)

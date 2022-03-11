import mongoose, { Schema } from 'mongoose'

const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  genres: [String],
  releaseDate: Number,
  cast: [String],
  isReleased: {
    type: Boolean,
    default: false,
  },
  imdbUrl: String,
})

const Movie = mongoose.model('Movie', schema)

export { Movie }

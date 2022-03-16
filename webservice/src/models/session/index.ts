import mongoose, { Schema } from 'mongoose'

const schema = new Schema({
  movie_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Movie',
  },
  title: String,
})

export const Session = mongoose.model('Session', schema)

import mongoose, { Schema } from 'mongoose'

const schema = new Schema({
  season_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Season',
  },
  title: String,
  description: String,
  cover: String,
  number: Number,
})

export const Episode = mongoose.model('Episode', schema)

import mongoose, { Schema } from 'mongoose'

const schema = new Schema({
  session_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Session',
  },
  title: String,
  description: String,
  cover: String,
  number: Number,
})

export const Session = mongoose.model('Session', schema)

import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'

import { router } from './routes'

mongoose.connect('mongodb://localhost/netflix')

const PORT = 4000
const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(router)

app.listen(PORT, () => {
  console.log(`Server is running on PORT http://localhost:${PORT}`)
})

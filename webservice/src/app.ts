import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import './services/database'

import { router as moviesRouter } from './routes/movies'
import { router as usersRouter } from './routes/users'
import { router as episodeRouter } from './routes/episodes'

const PORT = 4000
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use('/', moviesRouter)
app.use('/user', usersRouter)
app.use('/episode', episodeRouter)

app.listen(PORT, () => {
  console.log(`Server is running on PORT http://localhost:${PORT}`)
})

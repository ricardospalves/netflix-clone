import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import './services/database'

import { router as moviesRouter } from './routes/movies'
import { router as usersRouter } from './routes/users'

const PORT = 4000
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use('/', moviesRouter)
app.use('/user', usersRouter)

app.listen(PORT, () => {
  console.log(`Server is running on PORT http://localhost:${PORT}`)
})

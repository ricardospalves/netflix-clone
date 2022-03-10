import express, { Request, Response } from 'express'
import morgan from 'morgan'

import { router } from './routes'

const PORT = 4000
const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(router)

app.listen(PORT, () => {
  console.log(`Server is running on PORT http://localhost:${PORT}`)
})

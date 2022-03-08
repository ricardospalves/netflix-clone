import express, { Request, Response } from 'express'

const PORT = 4000
const app = express()

app.get('/', (request: Request, response: Response) => {
  response.json({
    message: 'Route works!',
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on PORT http://localhost:${PORT}`)
})

import { Request, Response, Router } from 'express'
import { Movie } from './models/movie'

const router = Router()

router.get('/', (request: Request, response: Response) => {
  response.json({
    message: 'get all',
  })
})

router.get('/:id', (request: Request, response: Response) => {
  const { id } = request.params

  response.json({
    message: `get id: ${id}`,
  })
})

router.post('/', async (request: Request, response: Response) => {
  try {
    const { body } = request
    const data = await new Movie(body).save()
    response.json({
      movie: data,
    })
  } catch (error) {
    response.json({
      error: true,
      message: error.message,
    })
  }
})

router.put('/:id', (request: Request, response: Response) => {
  const { id } = request.params

  response.json({
    message: `update id: ${id}`,
  })
})

router.delete('/:id', (request: Request, response: Response) => {
  const { id } = request.params

  response.json({
    message: `delete id: ${id}`,
  })
})

export { router }

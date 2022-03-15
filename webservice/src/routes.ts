import { Request, Response, Router } from 'express'
import { Movie } from './models/movie'

const router = Router()

router.get('/', async (request: Request, response: Response) => {
  try {
    const movies = await Movie.find({})

    response.json({
      movies,
    })
  } catch (error) {
    response.json({
      error: true,
      message: error.message,
    })
  }
})

router.get('/:id', async (request: Request, response: Response) => {
  try {
    const { id } = request.params
    const movie = await Movie.findById(id)

    response.json({
      movie,
    })
  } catch (error) {
    response.json({
      error: true,
      message: error.message,
    })
  }
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

router.put('/:id', async (request: Request, response: Response) => {
  try {
    const newMovie = request.body
    const { id } = request.params
    const movie = await Movie.findByIdAndUpdate(id, newMovie)

    response.json({
      movie,
    })
  } catch (error) {
    response.json({
      error: true,
      message: error.message,
    })
  }
})

router.delete('/:id', async (request: Request, response: Response) => {
  try {
    const { id } = request.params
    const movie = await Movie.findByIdAndDelete(id)

    response.json({
      movie,
    })
  } catch (error) {
    response.json({
      error: true,
      message: error.message,
    })
  }
})

export { router }

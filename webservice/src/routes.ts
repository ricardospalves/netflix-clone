import { Request, Response, Router } from 'express'

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

router.post('/', (request: Request, response: Response) => {
  const { body } = request

  response.json(body)
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

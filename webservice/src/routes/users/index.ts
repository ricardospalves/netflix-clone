import { Request, Response, Router } from 'express'
import { User } from '../../models/user'

const router = Router()

router.post('/login', async (request: Request, response: Response) => {
  try {
    const credentials = request.body
    const user = await User.findOne(credentials)

    if (user) {
      response.json({
        user,
      })
    } else {
      response.json({
        error: true,
        message: 'User not found',
      })
    }
  } catch (error) {
    response.json({
      error: true,
      message: error.message,
    })
  }
})

export { router }

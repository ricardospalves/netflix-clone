import { Request, Response, Router } from 'express'
import { Episode } from '../../models/episode'

const router = Router()

router.get(
  '/season/:season_id',
  async (request: Request, response: Response) => {
    try {
      const { season_id } = request.params
      const episodes = await Episode.find({
        season_id,
      })

      response.json({
        episodes,
      })
    } catch (error) {
      response.json({
        error: true,
        message: error.message,
      })
    }
  },
)

export { router }

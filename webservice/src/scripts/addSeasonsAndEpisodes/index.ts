import '../../services/database'
import { Movie } from '../../models/movie'
import { Season } from '../../models/season'
import { Episode } from '../../models/episode'

const addSeasonsAndEpisodes = async () => {
  try {
    const seriesList = await Movie.find({ type: 'series' }).select('_id')

    for (const series of seriesList) {
      const numberOfSeasons = Math.floor(Math.random() * 5) + 1

      for (let i = 1; i <= numberOfSeasons; i++) {
        const season = await new Season({
          movie_id: series,
          title: `Temporada ${i}`,
        }).save()
        console.log('season inserted')

        const numberOfEpisodes = Math.floor(Math.random() * 5)

        for (let x = 1; x <= numberOfEpisodes; x++) {
          console.log('episode inserted')
          await new Episode({
            session_id: season,
            title: 'Episódio',
            description: 'Cupiditate qui impedit nihil nesciunt.',
            cover: 'https://picsum.photos/300/200',
            number: x,
          }).save()
        }
      }
    }

    console.log('end')
  } catch (error) {
    console.error(error.message)
  }
}

addSeasonsAndEpisodes()

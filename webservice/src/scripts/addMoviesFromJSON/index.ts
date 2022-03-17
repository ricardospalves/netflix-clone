import '../../services/database'
import { Movie } from '../../models/movie'
import json from '../../data/movies.json'

const addMoviesFromJSON = async () => {
  try {
    for (const user of json) {
      await new Movie(user).save()
      console.log('inserted')
    }
  } catch (error) {
    console.error(error.message)
  }
}

addMoviesFromJSON()

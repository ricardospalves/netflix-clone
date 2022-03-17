import '../../services/database'
import { User } from '../../models/user'
import json from '../../data/users.json'

const addUsersFromJSON = async () => {
  try {
    for (const user of json) {
      await new User(user).save()
      console.log('inserted')
    }
  } catch (error) {
    console.error(error.message)
  }
}

addUsersFromJSON()

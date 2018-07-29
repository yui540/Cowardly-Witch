import { CHANGE_CHAPTER } from '../constants/opening'
import config from '../config/opening.json'

const chapter = 'Prologue'
const description = config[chapter]
const init = {
  chapter,
  description
}

export default (state = init, action) => {
  switch (action.type) {
    case CHANGE_CHAPTER:
      return Object.assign({}, state, {
        chapter: action.payload.chapter,
        description: action.payload.description
      })
    default:
      return state
  }
}

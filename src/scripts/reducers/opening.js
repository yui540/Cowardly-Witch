import { CHANGE_CHAPTER } from '../constants/opening'
import config from '../config/opening.json'

const init = {
  chapter: 'Prologue',
  description: config.Prologue
}

export default (state = init, action) => {
  switch (action.type) {
    case CHANGE_CHAPTER:
      return Object.assign({}, state, {
        chapter: action.payload.chapter,
        description: action.payload.description,
      })
    default:
      return state
  }
}

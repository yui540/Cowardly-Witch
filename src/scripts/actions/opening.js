import { CHANGE_CHAPTER } from '../constants/opening'

export const changeChapter = (chapter, description) => ({
  type: CHANGE_CHAPTER,
  payload: {
    chapter,
    description
  }
})

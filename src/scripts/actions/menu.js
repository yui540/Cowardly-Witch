import { OPEN_MENU, CLOSE_MENU } from '../constants/menu'

export const openMenu = () => ({
  type: OPEN_MENU,
  payload: {}
})

export const closeMenu = () => ({
  type: CLOSE_MENU,
  payload: {}
})

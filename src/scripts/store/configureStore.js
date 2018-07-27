import { createStore } from 'redux'
import reducer from '../reducers'

export default () => {
  const store = createStore(reducer)

  return store
}

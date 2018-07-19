import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import CowardlyWitch from './components/CowardlyWitch'
import '../scss/style.scss'

const store = configureStore()

render(
  <Provider store={store}>
    <CowardlyWitch />
  </Provider>,
  document.getElementById('root')
)

import React from 'react'
import { render } from 'react-dom'
import '../scss/style.scss'
import icon from '../images/profile/yui540.jpg'

const App = () => (
  <React.Fragment>
    <h1>Hello, yui540.</h1>
    <p>Frontend Engineer</p>
    <img src={icon} alt="yui540" />
  </React.Fragment>
)

render(<App />, document.getElementById('root'))

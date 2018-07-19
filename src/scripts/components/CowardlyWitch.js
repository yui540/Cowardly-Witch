import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

const Home = () => (
  <h1>臆病な魔女</h1>
)

export default () => (
  <Router>
    <div className="cowardly-witch">
      <Route exact path="/" component={Home} />
    </div>
  </Router>
)

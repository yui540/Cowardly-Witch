import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from '../containers/Home'
import ProfilePage from '../containers/ProfilePage'
import SitePage from '../containers/SitePage'

export default () => (
  <Router>
    <div className="cowardly-witch">
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route exact path="/site" component={SitePage} />
    </div>
  </Router>
)

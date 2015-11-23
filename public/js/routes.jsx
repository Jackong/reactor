import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'

import App from './containers/app'
import About from './containers/about'
import User from './containers/user'
import Home from './containers/home'

export default (
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About}/>
            <Route path="user" component={User} />
        </Route>
    </Router>
)

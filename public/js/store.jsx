import {createStore, compose} from 'redux'
import {reduxReactRouter} from 'redux-router'
import reducers from './reducers'

import createHistory from 'history/lib/createHashHistory'

const createStoreWithMiddleware = compose(
    reduxReactRouter({
        createHistory
    })
)(createStore)

export default createStoreWithMiddleware(reducers)

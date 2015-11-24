import {combineReducers} from 'redux'
import {routerStateReducer} from 'redux-router'

const content = (state = 'hi', action) => {
    switch (action.type) {
        case 'SYNC':
            return action.payload
            break
        default:
            return state
    }
}

export default combineReducers({
    router: routerStateReducer,
    content
})

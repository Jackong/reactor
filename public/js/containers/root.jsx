import React, { PropTypes } from 'react'
import {Provider} from 'react-redux'
import store from '../store'
import routes from '../routes'

class Root extends React.Component {
    render () {
        return (
            <Provider store={store}>
                {routes}
            </Provider>
        )
    }
}

export default Root

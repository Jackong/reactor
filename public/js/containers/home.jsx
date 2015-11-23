import React, { PropTypes } from 'react'
import App from '../components/app'

class Home extends React.Component {
    render () {
        return (
            <div>
                home
                <hr/>
                <App name='tutorial' />
            </div>
        )
    }
}

export default Home

import React, { PropTypes } from 'react'
import {Link} from 'react-router'

class App extends React.Component {
    render () {
        return (
            <div>
                <ul>
                    <li>
                        <Link to='/'>/home</Link>
                    </li>
                    <li>
                        <Link to='about'>/about</Link>
                    </li>
                    <li>
                        <Link to='user'>/user</Link>
                    </li>
                </ul>
                <hr/>
                {this.props.children}
            </div>
        )
    }
}

export default App

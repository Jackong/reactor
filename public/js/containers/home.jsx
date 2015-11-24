import React, { PropTypes } from 'react'
import {connect} from 'react-redux'
import Content from '../components/content'
import {sync} from '../actions'

class Home extends React.Component {
    render () {
        return (
            <div>
                home
                <hr/>
                <div>
                    <input ref='input' type='text' defaultValue='dp'/>
                    <Content content={this.props.content}/>
                    <button onClick={e => this.props.dispatch(sync(this.refs.input.value.trim()))}>sync</button>
                </div>
            </div>
        )
    }
}

export default connect(state => state)(Home)

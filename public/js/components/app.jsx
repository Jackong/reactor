import React, { PropTypes } from 'react'

import Content from './content'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: "hi"
        }
    }
    onSync() {
        this.setState({content: this.refs.input.value})
    }
    render () {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <hr/>
                <input ref='input' type='text' defaultValue='dp'/>
                <Content content={this.state.content}/>
                <button onClick={e => this.onSync(e)}>sync</button>
            </div>
        )
    }
}

export default App

import React, { PropTypes } from 'react'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: 'bq'
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
                <p>{this.state.content}</p>
                <button onClick={e => this.onSync(e)}>sync</button>
            </div>
        )
    }
}

export default App

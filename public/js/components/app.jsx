import React, { PropTypes } from 'react'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: 'bq'
        }
    }
    onToggle() {
        this.setState({content: this.state.content === 'bq' ? 'dp' : 'bq'})
    }
    render () {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <hr/>
                <p>{this.state.content}</p>
                <button onClick={e => this.onToggle(e)}>toggle</button>
            </div>
        )
    }
}

export default App

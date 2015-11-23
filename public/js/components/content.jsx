import React, { PropTypes } from 'react'
import Radium from 'radium'

class Content extends React.Component {
    render () {
        return (
            <div>
                <p style={[styles.base, styles.other]}>{this.props.content}</p>
            </div>
        )
    }
}

Content.propTypes = {
    content: PropTypes.string.isRequired
}

const styles = {
    base: {
        color: 'red'
    },
    other: {
        fontSize: 30
    }
}

export default Radium(Content)

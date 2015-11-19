import React, { PropTypes } from 'react'

class Content extends React.Component {
    render () {
        return (
            <div>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

Content.propTypes = {
    content: PropTypes.string.isRequired
}

export default Content

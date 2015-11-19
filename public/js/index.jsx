import React from 'react'
import {render} from 'react-dom'

import App from './components/app'

try {
    render(<App name='tutorial' />, document.getElementById('app'))
} catch(err) {
    console.error(err)
}

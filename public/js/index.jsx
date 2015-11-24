import React from 'react'
import {render} from 'react-dom'

import Root from './containers/root'

try {
    render(<Root />, document.getElementById('app'))
} catch(err) {
    console.error(err)
}

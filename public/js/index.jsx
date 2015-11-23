import React from 'react'
import {render} from 'react-dom'

import routes from './routes'

try {
    render(routes, document.getElementById('app'))
} catch(err) {
    console.error(err)
}

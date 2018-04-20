import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import 'normalize.css'

injectGlobal`
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }
`

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

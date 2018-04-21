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
    background-color: rgb(246, 250, 251);
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
  }
`

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

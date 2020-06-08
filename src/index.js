import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from 'housing-core/configureStore'
import { Provider } from 'react-redux'
import reducers from './baseReducer'
import Routes from './routes.js'

const store = configureStore({ reducers })
function App () {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))

import React from 'react'
import {Provider} from 'react-redux'
import {store} from './src/store'
import {AppRegistry} from 'react-native'
import App from './src/App'
import {name as appName} from './app.json'

const AppProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => AppProvider)

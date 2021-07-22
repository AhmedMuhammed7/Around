import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './css/index.scss'
import store from './store/index'
import App from './App'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

import React from 'react'
import ReactDOM from 'react-dom'
import Note from './Note'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from '../store'

const el = document.getElementById('content')
const history = syncHistoryWithStore(hashHistory, store)

history.push(`/${location.search}`)

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Note} />
    </Router>
  </Provider>
  ), el, function () {
  })

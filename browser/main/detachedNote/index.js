import ReactDOM from 'react-dom'
import Note from './Note'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from '../store'

const el = document.getElementById('content')
const history = syncHistoryWithStore(hashHistory, store)


ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={Note}>
        </Route>
      </Router>
    </Provider>
  ), el, function () {
  })
import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { applyMiddleware, createStore, compose } from 'redux'
import { ToastContainer } from 'react-toastify' 
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import 'nprogress/nprogress.css'
import history from './history'
import { GlobalStyle, AppContainer } from './global.style'
import Topics from './containers/Topics/Topics'
import Footer from './components/Footer/Footer'
import reducers from './reducers/cnode'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers, 
  composeEnhancers(applyMiddleware(logger, thunk))
)

const NoMatch = () => (<div>no matches route.....</div>)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <AppContainer>
            <GlobalStyle />
            <ToastContainer />
            <Switch>
              <Route path="/" exact component={Topics} />
              <Route path="/tab/:type" exact component={Topics} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </AppContainer>
        </Router>
      </Provider>
    )
  }
}

export default App

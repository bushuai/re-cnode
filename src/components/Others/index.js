import React, { Component } from 'react'
// React router
import { BrowserRouter as Router, Link, Route, Switch, NavLink } from 'react-router-dom'
import * as Sentry from '@sentry/browser';
import Game from './Game'
import Timer from './Timer'
import LoginControl from './LoginControl'
import Button from './Button'
import ComponentSample from './ComponentSample'
import TestComponent from './TestComponent'
import Loadable from 'react-loadable'
import Loading from './Loading'
import './App.css'
// for code split 

Sentry.init({
  dsn: "https://73aa76e20f884087b506a7c3d94eee4a@sentry.io/1309931"
})
const LoadingLoadableComponent = Loadable({
  loader: () => import('./Loading'),
  loading: Loading
})


const Index = () => (<div>Index Route</div>)
const Home = () => (<div>Home Route</div>)
const About = () => (<div>About Route</div>)
const NoMatch = () => (<div>no matche!</div>)
// nested route component
const Topic = ({ match }) => (<div>topic id: {match.params.id}</div>)
const RouteInfo = ({ match }) => (<div>
  <ul>
    <li>{match.path}</li>
    <li>{match.url}</li>
    <li><Link to={`${match.path}/5555`}>Route Info 5555</Link></li>
    <li><Route path={`${match.path}/:id`} component={Topic}/></li>
  </ul>
</div>)

class App extends Component {
  componentDidCatch (error, errorInfo) {
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      })
      Sentry.captureException(error);
    })
  }

  render() {
    // const extraProps = {
    //   name: 'inline-render-component'
    // }

    return (
      <Router>
        <div className="App">
          {/* <Error /> */}
          <Game />
          <Timer />
          <Button name="React"/>
          <LoginControl />
          <ComponentSample />
          <hr/>
          Routes:
          <ul>
            <li><Link to="/">Index</Link></li>
            <li><NavLink to="/home" activeClassName="active-link">Home</NavLink> </li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/route-info">Route-Info</Link></li>
            <li><Link to="/loading">Loading</Link></li>
            <li><Link to="/test">Test Component</Link></li>
          </ul>
          <hr/>
          Pages:
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
            {/* or inline render */}
            {/* <Route path="/home" render={props => <InlineRenderComponent {...props} extraProps={extraProps}>} /> */}
            <Route path="/route-info" component={RouteInfo} />
            <Route path="/loading" component={LoadingLoadableComponent} />
            <Route path="/test" component={TestComponent} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

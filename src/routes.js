import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)
export default BasicExample

// ROBIN
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import history from './history'

export default () => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route exact path={RoutePath.ROOT} component={getComponent(Home)} />
        {/* <Route path={RoutePath.AUTH0_CALLBACK} component={getComponent(Loading)} /> */}
        <Route path={RoutePath.LOGOUT} component={getComponent(Logout)} />

        <Route path={RoutePath.PRINT} component={getComponent(Print)} />

        <PrivateRoute
          path={RoutePath.APPOINTMENT_MGMT}
          component={getComponent(AppointmentManager)} />

        {/* Routes requiring user to be logged in */}
        <PrivateRoute path={`${RoutePath.NOTE}/:id`} component={getComponent(Note)} />
        <PrivateRoute
          path={`${RoutePath.PROFILE}/:id`}
          component={getComponent(Profile)} />
        <PrivateRoute path={RoutePath.SCHEDULE} component={getComponent(Schedule)} />
        <PrivateRoute path={RoutePath.SETTINGS} component={getComponent(Settings)} />
        <PrivateRoute path={RoutePath.TEST} component={getComponent(Test)} />
        <PrivateRoute path={RoutePath.WELCOME} component={getComponent(Welcome)} />

        {/* Scribe Routes */}
        <PrivateRoute path={`${RoutePath.SCRIBE_NOTE}/:id`} component={getComponent(ScribeNote)} />

        {/* Routes for administrators */}
        <PrivateRoute path={RoutePath.ADMIN_ROOT} component={getComponent(Admin)} />
      </div>
    </ConnectedRouter>
  )
}

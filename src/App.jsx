import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <header class="menu">
        <h3>menu options:</h3>
        <nav>
          <ul>
            <li>
              <Link to="/">Back to Home</Link>
            </li>
            {/* <li> */}
            {/* <Link to="/1">Featured Show</Link> */}
            {/* </li> */}
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App

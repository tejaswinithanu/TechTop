import {Switch, Route, BrowserRouter} from 'react-router-dom'

import './App.css'
import LoginPage from './components/LoginPage'
import LandingPage from './components/LandingPage'
import TestsDisplayPage from './components/TestsDisplayPage'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/tests" component={TestsDisplayPage} />
    </Switch>
  </BrowserRouter>
)

export default App

import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from '../Home/Home'
import FullStory from '../../Containers/FullStory/FullStory'
import './App.css'

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/article/:id" component={FullStory} />
      </Switch>
    </div>
  )
}

export default withRouter(App)

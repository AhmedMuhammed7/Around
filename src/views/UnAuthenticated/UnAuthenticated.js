import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../../components/Global/Navbar/Navbar'
import Landing from '../Landing/Landing'
import Signin from '../Signin/Signin'
import Signup from '../Signup/Signup'

const UnAuthenticated = () => {
  return (
    <>
      <Router>
        <Navbar status="unauthenticated"/>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
        </Switch>
      </Router>
    </>
  )
}



export default UnAuthenticated

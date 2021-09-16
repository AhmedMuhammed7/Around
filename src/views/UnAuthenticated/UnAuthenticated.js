import React from 'react'
import { Person } from 'react-bootstrap-icons'
import IconLink from '../../components/IconLink/IconLink'
import Navbar from '../../components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from '../Landing/Landing'
import Signin from '../Signin/Signin'
import Signup from '../Signup/Signup'

const UnAuthenticated = () => {
  return (
    <>
      <Router>
        <Navbar>
          <IconLink
            path="/signin"
            icon={<Person size={25} />}
            key="/signin"
            label="Sign in"
          />
        </Navbar>
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

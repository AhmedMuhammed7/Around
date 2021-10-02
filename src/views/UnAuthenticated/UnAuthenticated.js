import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from '../Landing/Landing'
import Signin from '../Signin/Signin'
import Signup from '../Signup/Signup'
import Icon from '../../components/Icon/Icon'
import { Person } from 'react-bootstrap-icons'

const UnAuthenticated = () => {
  const navIcons = <Icon icon={<Person size={23}/>} path="/signin" label="Sign in" />
  return (
    <>
      <Router>
        <Navbar navIcons={navIcons}/>
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

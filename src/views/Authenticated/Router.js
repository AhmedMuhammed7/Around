import React from 'react'
import {
  Redirect,
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Home from '../Home/Home'
import { string } from 'prop-types'
import { Example } from '../Page/Page'
import { FixedComponents } from '../../components/FixedComponents/FixedComponents'

import Products from '../Products/Products'
export const AuthenticatedRouter = ({ redirect }) => {
  return (
    <Router>
      <FixedComponents />
      {redirect && <Redirect to={redirect} />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/page" component={Example} />
        <Route exact path="/products" component={Products} />
      </Switch>
    </Router>
  )
}
AuthenticatedRouter.propTypes = {
  redirect: string,
}

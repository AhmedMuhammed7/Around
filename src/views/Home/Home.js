import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import useDocumentTitle from '../../utils/hooks/useDocumentTitle'
import { resetRedirect } from '../../actions/redirect'

const Home = () => {
  useDocumentTitle('Home')
 
  return (
    <div className="container">
      Home page
    </div>
  )
}

const mapStateToProps = state => ({redirect : state.redirect})

Home.propTypes = {
  redirect: PropTypes.string,
  resetRedirect: PropTypes.func,
}


export default connect(mapStateToProps, { resetRedirect })(Home)

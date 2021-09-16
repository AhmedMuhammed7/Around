import React, { useEffect } from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { resetRedirect } from '../../actions/redirect'
import SigninForm from '../../components/SigninForm/SigninForm'
import Loading from '../../components/Loading/Loading'
import useDocumentTitle from '../../utils/hooks/useDocumentTitle'
import { Footer } from '../../components/Footer/Footer'

const Signin = ({ resetRedirect, redirect, loading }) => {
  useDocumentTitle('Signin')
  useEffect(() => {
    resetRedirect()
  }, [resetRedirect])

  return (
    <>
      {redirect && <Redirect to={redirect} />}
      {loading ? <Loading /> : <SigninForm />}
      <Footer/>
    </>
  )
}

Signin.propTypes = {
  resetRedirect: PropTypes.func.isRequired,
  redirect: PropTypes.string,
  loading : PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  redirect: state.redirect,
  loading: state.loading.USER_SIGNIN > 0,
})

export default connect(mapStateToProps, { resetRedirect })(Signin)

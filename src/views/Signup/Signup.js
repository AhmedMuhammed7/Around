import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SignupForm from '../../components/UnAthenticated/SignupForm/SignupForm'
import Loading from '../../components/Global/Loading/Loading'
import Footer from '../../components/UnAthenticated/Footer/Footer'
import { Redirect } from 'react-router-dom'
import useDocumentTitle from '../../utils/hooks/useDocumentTitle'
const Signup = ({ isLoading, redirect }) => {
  useDocumentTitle('Signup')
  return (
    <>
      {redirect && <Redirect to={redirect} />}
      {isLoading ? <Loading /> : <SignupForm />}
      <Footer />
    </>
  )
}

const mapStateToProps = (state) => ({
  isLoading: state.loading.USER_SIGNUP > 0,
  redirect: state.redirect,
})

Signup.propTypes = {
  isLoading: PropTypes.bool,
  redirect : PropTypes.string,
}

export default connect(mapStateToProps)(Signup)
import React from 'react'
import PropTypes from 'prop-types'
import useInput from '../../../utils/hooks/useInput'
import Button from '../../Global/Button'
import useCheckbox from '../../../utils/hooks/useCheckbox'
import useAlert from '../../../utils/hooks/useAlert'
import { connect } from 'react-redux'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { signin } from '../../../actions/authentication'
import { Link } from 'react-router-dom'
const SigninForm = ({signin, error}) => {
  const [email, isValidEmail, emailInput] = useInput({
    type: 'text',
    model: 'secondary',
    placeholder: 'email',
    category: 'email',
  })
  const [password, isValidPassword, passwordInput] = useInput({
    type: 'password',
    model: 'secondary',
    placeholder: 'password',
    category: 'password',
  })
  const [keepSignedIn, keepSignedInCheckbox] = useCheckbox({
    label: 'Keep me signed in',
  })

  const [alert,setShow ] = useAlert({
    label : error,
    variant : 'danger'
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    if (isValidEmail && isValidPassword) {
      signin({email,password,remember_token :keepSignedIn })
      setShow(true)
    } 
  }

  return (
    <Container className="signin-form py-5 d-flex align-items-center justify-content-center flex-column">
      <div className="p-5  content">
        {error && alert}
        <h3 className="fw-bold color-text-3">Sign in</h3>
        <p className="color-text-1 fs-6">
          Sign in to your account using email and password provided during
          registration.
        </p>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col sm={12}>{emailInput}</Col>
            <Col sm={12}>{passwordInput}</Col>
          </Row>
          <Row>
            <Col md={6} className="mb-2">
              {keepSignedInCheckbox}
            </Col>
            <Col md={6} className="d-flex justify-content-md-end">
              <Link
                to="/forgot-password"
                className="color-text-3 text-decoration-none fw-bold"
              >
                Forgot password?
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                type="submit"
                label="sign in"
                className="btn-one mt-3 w-100 py-2"
              />
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  )
}

SigninForm.propTypes = {
  signin : PropTypes.func.isRequired,
  error : PropTypes.string
}

const mapStateToProps = state => ({error : state.errors.USER_SIGNIN})

export default connect(mapStateToProps, { signin })(SigninForm)

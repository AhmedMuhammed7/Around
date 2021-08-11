import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Button from '../../Global/Button'
import { signup } from '../../../actions/authentication'
import useInput from '../../../utils/hooks/useInput'
import useAlert from '../../../utils/hooks/useAlert'

const SignupForm = ({ signup,error }) => {
  const [firstName, validFirstName, firstNameInput] = useInput({
    type: 'text',
    label: 'first name',
    required: true,
    category: 'name',
  })
  const [lastName, validLastName, lastNameInput] = useInput({
    type: 'text',
    label: 'last name',
    required: true,
    category: 'name',
    
  })
  const [email, validEmail, emailInput] = useInput({
    type: 'text',
    label: 'email address',
    required: true,
    category: 'email',
  })
  const [phone, validPhone, phoneInput] = useInput({
    type: 'text',
    label: 'phone number',
    required: false,
    category: 'phone',
  })
  const [password, validPassword, passwordInput] = useInput({
    type: 'password',
    label: 'password',
    required: true,
    category: 'password',
  })

  const [confirmPassword, validConfirmPassword, confirmPasswordInput] =
    useInput({
      type: 'password',
      label: 'confirm password',
      required: true,
      category: 'confirm-password',
      confirmPassword: password,
    })
  const [alert, setShow] = useAlert({
    label: error,
    variant: 'danger',
  })
  const isValid =
    validFirstName &&
    validLastName &&
    validEmail &&
    validPhone &&
    validConfirmPassword &&
    validPassword

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isValid) {
      signup({
        Fname: firstName,
        Lname: lastName,
        email,
        phone,
        password,
        password_confirmation: confirmPassword,
      })
      setShow(true)
    }
  }

  return (
    <Container className="signup-form d-flex justify-content-center align-items-center">
      <div className="p-4 px-5">
        {error && alert}
        <h2 className="color-text-3 mb-3">No account? Sign up</h2>
        <p className="color-text-1 fs-6 mb-4">
          Registration takes less than a minute but gives you full control over
          your orders.
        </p>
        <div>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col sm={6}>{firstNameInput}</Col>
              <Col sm={6}>{lastNameInput}</Col>
              <Col sm={6}>{emailInput}</Col>
              <Col sm={6}>{phoneInput}</Col>
              <Col sm={6}>{passwordInput}</Col>
              <Col sm={6}>{confirmPasswordInput}</Col>
              <Col sm={6}>
                <Button
                  label="Sign up"
                  type="submit"
                  className={`btn-one w-100 my-3 ${!isValid && 'disabled'}`}
                />
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </Container>
  )
}

const mapStateToProps = state => ({error : state.errors.USER_SIGNUP})

SignupForm.propTypes = {
  signup: PropTypes.func.isRequired,
  error : PropTypes.string
}

export default connect(mapStateToProps, { signup })(SignupForm)

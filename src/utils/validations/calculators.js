import { isEmail } from 'validator'
import { validationErrors } from '../constants'
import {
  isContainsLowerLetters,
  isContainsSymbols,
  isContainsUpperLetters,
  isContainsNumbers,
  isLength,
  isIdentical,
} from './helpers'

export const isValidName = (name) => {
  if (isContainsSymbols(name))
    return [false, validationErrors.name.SpecialCharachters]
  if (!isLength(name,3,20)) return [false, validationErrors.name.length]
  return [true]
}

export const isConfirmedPassword = (password, confirmPassword) => [
  isIdentical(password, confirmPassword),
  validationErrors.password.confirmed,
]

export const isValidEmail = (email) => [isEmail(email), validationErrors.email]

export const isValidPhone = (phone) => [
  isLength(phone,11,11) &&
    phone.startsWith('01') &&
    /[1,2,0,5]/.test(phone[2]),
  validationErrors.phone,
]

export const isValidPassword = (password) => {
  if (!isLength(password,8,1000))
    return [false, validationErrors.password.length]

  if (!isContainsLowerLetters(password))
    return [false, validationErrors.password.lowerCase]
  if (!isContainsUpperLetters(password))
    return [false, validationErrors.password.upperCase]

  if (!isContainsNumbers(password, 1))
    return [false, validationErrors.password.numbers]
  if (!isContainsSymbols(password))
    return [false, validationErrors.password.symbols]

  return [true]
}

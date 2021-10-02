import {
  isNameCategory,
  isEmailCategory,
  isPasswordCategory,
  isPhoneCategory,
  isUnCategorized,
  isConfirmPasswordCategory,
} from '../validations/qualifiers'

import {
  isValidName,
  isValidEmail,
  isValidPhone,
  isValidPassword,
  isConfirmedPassword,
} from '../validations/calculators'

export const validationRules = [
  { qualifier: isNameCategory, calculator: isValidName },
  { qualifier: isEmailCategory, calculator: isValidEmail },
  { qualifier: isPasswordCategory, calculator: isValidPassword },
  { qualifier: isPhoneCategory, calculator: isValidPhone },
  { qualifier: isConfirmPasswordCategory, calculator: isConfirmedPassword },
  { qualifier: isUnCategorized, calculator: () => [true] },
]


export const isContainsSymbols = (value) => /[<,>,/,\\,@,$,#,),(,!,*]/.test(value)

export const isContainsLowerLetters = (value) => /[a-z]/.test(value)

export const isContainsUpperLetters = (value) => /[A-Z]/.test(value)

export const isContainsNumbers = (value) => /[0-9]/.test(value)

export const isIdentical = (valueOne, valueTwo) => valueOne === valueTwo

export const isLength = (value, min, max) =>
  value.length <= (max || 1000) && value.length >= (min || 0)

export const isInRange = (value, min, max) => value >= min && value <= max

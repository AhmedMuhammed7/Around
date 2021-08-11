import { validationRules } from '../validations/helpers'

const useValidation = (category, value, confirmed) =>
  validationRules
    .find((rule) => rule.qualifier(category))
    .calculator(value, confirmed)

export default useValidation

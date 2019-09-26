export const create = ({ firstName = '', lastName = '', email = '' } = {}) => ({
  firstName,
  lastName,
  email,
  password: '',
})

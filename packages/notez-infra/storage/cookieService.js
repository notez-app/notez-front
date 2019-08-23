import cookie from 'cookie'

const THIRTY_DAYS = 30 * 24 * 60 * 60

const setOptions = {
  maxAge: THIRTY_DAYS,
}

export const get = (key, cookies = document.cookie, options = {}) => {
  return cookie.parse(cookies, options)[key]
}

export const set = (key, value, options = {}) => {
  document.cookie = cookie.serialize(key, value, { ...setOptions, ...options })
}

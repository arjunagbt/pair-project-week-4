module.exports = (rawPassword) => {
  if (rawPassword.length < 6) {
    return new Error('Password at least 6 characters')
  } else return null
}

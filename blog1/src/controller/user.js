const login = (username, password) => {
  console.log(username, password)
  if(username === '123' && password==='456' ) {
    return true
  }
  return false
}

module.exports = {
  login
}
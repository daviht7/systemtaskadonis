'use strict'

class User {

  /*faz com que todos campos sejam validados ao mesmo tempo */
  get validateAll() {
    return true;
  }

  get rules () {
    return {
      username : "required|unique:users",
      email: "required|email|unique:users",
      password: "required|confirmed"
    }
  }
}

module.exports = User

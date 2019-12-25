'use strict'

class Session {

  /*faz com que todos campos sejam validados ao mesmo tempo */
  get validateAll() {
    return true;
  }

  get rules () {
    return {
      email: "required|email",
      password: "required"
    }
  }
}

module.exports = Session

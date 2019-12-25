'use strict'

class ResetPassword {

  /*faz com que todos campos sejam validados ao mesmo tempo */
  get validateAll() {
    return true;
  }


  get rules () {
    return {
      token: "required",
      password: "required|confirmed"
    }
  }
}

module.exports = ResetPassword

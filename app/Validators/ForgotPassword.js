'use strict'

class ForgotPassword {

  /*faz com que todos campos sejam validados ao mesmo tempo */
  get validateAll() {
    return true;
  }


  get rules () {
    return {
      email: "required|email",
      redirect: "required|url"
    }
  }
}

module.exports = ForgotPassword

'use strict'

const Antl = use("Antl")

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

  get messages() {
    return Antl.list("validation")
  }
}

module.exports = ForgotPassword

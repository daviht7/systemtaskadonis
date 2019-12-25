'use strict'

const Antl = use("Antl")


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

  get messages() {
    return Antl.list("validation")
  }
}

module.exports = ResetPassword

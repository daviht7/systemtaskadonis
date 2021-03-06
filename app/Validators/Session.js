'use strict'

const Antl = use("Antl")


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

  get messages() {
    return Antl.list("validation")
  }
}

module.exports = Session

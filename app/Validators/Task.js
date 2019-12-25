'use strict'

const Antl = use("Antl")


class Task {

  /*faz com que todos campos sejam validados ao mesmo tempo */
  get validateAll() {
    return true;
  }

  get rules () {
    return {
      title: "required",
      description: "required",
      due_data : "date"
    }
  }

  get messages() {
    return Antl.list("validation")
  }
}

module.exports = Task

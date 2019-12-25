'use strict'

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
}

module.exports = Task

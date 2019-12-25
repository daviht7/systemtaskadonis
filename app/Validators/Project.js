'use strict'

class Project {

  /*faz com que todos campos sejam validados ao mesmo tempo */
  get validateAll() {
    return true;
  }

  get rules () {
    return {
      title: "required",
      description: "required"
    }
  }
}

module.exports = Project

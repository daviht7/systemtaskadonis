'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')
const Env = use("Env")
const Youch = use("Youch")


class ExceptionHandler extends BaseExceptionHandler {

  async handle (error, { request, response }) {



    if(error.name === "ValidationException") {
      console.log(Env.get("NODE_ENV"))
      return response.status(error.status).send(error.messages)
    }

    if(Env.get("NODE_ENV") === "development") {
      console.log("error")
      const youch = new Youch(error,request.request)
      const errorJson = await youch.toJSON()
      return response.status(error.status).send(errorJson)
    }

    return response.status(error.status)
  }


  async report (error, { request }) {
  }
}

module.exports = ExceptionHandler

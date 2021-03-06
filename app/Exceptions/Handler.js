'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')
const Env = use("Env")
const Youch = use("Youch")
const Raven = require("raven")
const Config = use("Config")


class ExceptionHandler extends BaseExceptionHandler {

  async handle (error, { request, response }) {



    if(error.name === "ValidationException") {
      console.log(Env.get("NODE_ENV"))
      return response.status(error.status).send(error.messages)
    }

    if(Env.get("NODE_ENV") === "development") {
      console.log("error",error)
      const youch = new Youch(error,request.request)
      const errorJson = await youch.toJSON()
      return response.status(error.status).send(errorJson)
    }

    return response.status(error.status)
  }


  async report (error, { request }) {

    Raven.config(Config.get("services.sentry.dsn"))
    Raven.captureException(error)

  }
}

module.exports = ExceptionHandler

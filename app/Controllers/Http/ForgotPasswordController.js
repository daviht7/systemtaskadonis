'use strict'

const moment = require("moment")
const crypto = require("crypto")
const User = use("App/Models/User")
const Mail = use("Mail")

class ForgotPasswordController {

  async store({request,response}) {

    try {

    const email = request.input("email")
    const user = await User.findByOrFail("email",email)

    user.token = crypto.randomBytes(10).toString("hex")
    user.token_created_at = new Date()

    await user.save()

    Mail.send(["emails.forgot_password"],
    {
      email,
      token : user.token,
      link : `${request.input("redirect_url")}?token=${user.token}`
    },message =>
    {
      message.to(user.email)
      .from("daviht7@gmail.com","Davi Holanda")
      .subject("Recuperação de senha")
    })
    } catch(err) {
      return response
      .status(err.status)
      .send({error : { message : "Algo não deu certo, esse e-mail existe?"}});
    }

  }

  async update({request,response}) {

    try {

      const { token,password } = request.all()
      const user = await User.findByOrFail("token",token)

      console.log(token,password,user.token_created_at)

      const tokenExpired = moment()
      .subtract("2","days")
      .isAfter(user.token_created_at)

      console.log("tokenExpired : ",tokenExpired)

      if(tokenExpired) {
        return response
        .status(401)
        .send({error : {message : "O token de recuperação está expirado."}})
      }

      user.token = null;
      user.token_created_at = null;
      user.password = password

      await user.save()

    }catch(err) {
      return response.status(err.status).send({error :
        { message : "Algo deu errado ao tentar resetar a senha."}});
    }

  }

}

module.exports = ForgotPasswordController

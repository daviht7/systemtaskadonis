'use strict'

const Mail = use("Mail")
const Helpers = use("Helpers")

class NewTaskMail {
  static get concurrency () {
    return 1
  }

  static get key () {
    return 'NewTaskMail-job'
  }

  async handle ({username,title,file,email}) {
    console.log("entrou no job newtaskmail")
    await Mail.send(["emails.new_task"],
  {username,title , hasAttachment : !!file },
  messages => {
    messages
    .to(email)
    .from("daviht7@gmail.com","Davi Holanda")
    .subject("Nova tarefa para você")

    if(file) {
      messages.attach(Helpers.tmpPath(`uploads/${file.file}`),{
        filename :file.name
      })
    }
  }
  )

  }

}

module.exports = NewTaskMail


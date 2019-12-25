'use strict'

const Mail = use("Mail")
const Helpers = use("Helpers")
const TaskHook = exports = module.exports = {}

TaskHook.sendNewTaskMail = async (taskInstance) => {

  if(!taskInstance.user_id && !taskInstance.dirty.user_id) return

  const {username,email} = await taskInstance.user().fetch()
  const file = await taskInstance.file().fetch()
  const {title} = taskInstance

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

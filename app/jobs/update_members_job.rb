# class UpdateMembersJob < ApplicationJob
#   def perform(users, conversation_id)

#     update = Api::MessagesController.render(
#       partial: 'api/updates/update',
#       locals: { members: users,
#                 conversation_id: conversation_id
#               }
#     )

#     ActionCable.server.broadcast("chat_#{conversation_id}",
#     message: {message_type: "update", conversation: conversation_id})
#   end

#   def perform(message, conversation)
#     message = Api::MessagesController.render(
#       partial: 'api/messages/message',
#       locals: { message: message }
#     )
#     ActionCable.server.broadcast("chat_#{conversation.id}",
#                                  message: JSON.parse(message))
#   end
# end

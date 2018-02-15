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

# end

class MessageRelayJob < ApplicationJob
  def perform(message, user)
    id = message.conversation_id
    message = Api::MessagesController.render(
      partial: 'api/messages/message',
      locals: { message: message, user: user }
    )
    ActionCable.server.broadcast("chat_#{id}",
                                 message: JSON.parse(message))
  end
end

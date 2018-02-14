class MessageRelayJob < ApplicationJob
  def perform(message)
    id = message.conversation_id
    message = Api::MessagesController.render(
      partial: 'api/messages/message',
      locals: { message: message }
    )
    ActionCable.server.broadcast("chat_#{id}",
                                 message: JSON.parse(message))
  end
end

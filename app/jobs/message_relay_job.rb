class MessageRelayJob < ApplicationJob
  def perform(message, conversation)
    message = Api::MessagesController.render(
      partial: 'api/messages/message',
      locals: { message: message }
    )
    ActionCable.server.broadcast("channel_#{conversation.id}",
                                 message: JSON.parse(message))
    # ActionCable.server.broadcast("channel_test",
    #                              message: JSON.parse(message))
  end
end

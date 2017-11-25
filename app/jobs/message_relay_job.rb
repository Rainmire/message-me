class MessageRelayJob < ApplicationJob
  def perform(message, channel)
    message = Api::MessagesController.render(
      partial: 'api/messages/message',
      locals: { message: message }
    )
    ActionCable.server.broadcast("channel_#{channel.name}",
                                 message: JSON.parse(message))
  end
end

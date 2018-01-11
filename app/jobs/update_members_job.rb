class UpdateMembersJob < ApplicationJob
  def perform(conversation_id)

    ActionCable.server.broadcast("channel_#{conversation_id}",
    message: {message_type: "update", conversation: conversation_id})
  end
end

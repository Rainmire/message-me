class ChatChannel < ApplicationCable::Channel
  def subscribed
    memberships = current_user.conversation_memberships
    memberships.each do |membership|
      stream_from "chat_#{membership.conversation_id}"
    end
  end
end

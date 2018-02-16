class NewConversationJob < ApplicationJob
  def perform(member_ids, conversation)

    newConversation = Api::ConversationsController.render(
      'api/conversations/index',
      assigns: { conversations: [conversation] }
    )

    member_ids.each do |id|
      ActionCable.server.broadcast("web_notifications_#{id}",
      action: "join new conversation",
      content: newConversation)
    end
  end
end

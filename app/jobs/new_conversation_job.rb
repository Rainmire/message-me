class NewConversationJob < ApplicationJob
  def perform(member_ids, conversation)

    puts "NEW CONVO MEMBERS: #{member_ids}"

    new_conversation = Api::ConversationsController.render(
      'api/conversations/index',
      assigns: { conversations: [conversation] }
    )

    member_ids.each do |id|
      ActionCable.server.broadcast("web_notifications_#{id}",
      action: "join new conversation",
      content: JSON.parse(new_conversation))
    end
  end
end

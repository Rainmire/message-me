class ConversationMembership < ApplicationRecord
  after_commit {
    update_message = Message.new(message_type: "update")

    conversation = Conversation.find(self.conversation_id)
    MessageRelayJob.perform_later(update_message, conversation)
  }

  belongs_to :member,
  primary_key: :id,
  foreign_key: :member_id,
  class_name: :User

  belongs_to :conversation,
  primary_key: :id,
  foreign_key: :conversation_id,
  class_name: :Conversation
end

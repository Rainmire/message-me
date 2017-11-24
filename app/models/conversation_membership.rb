class ConversationMembership < ApplicationRecord
  belongs_to :member,
  primary_key: :id,
  foreign_key: :member_id,
  class_name: :User

  belongs_to :conversation,
  primary_key: :id,
  foreign_key: :conversation_id,
  class_name: :Conversation
end

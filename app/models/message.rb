class Message < ApplicationRecord
  belongs_to :conversation
  belongs_to :user
  validates :body, :user_id, :conversation_id, presence: true
end

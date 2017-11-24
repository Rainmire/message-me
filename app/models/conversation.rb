class Conversation < ApplicationRecord
  has_many :messages
  # has_many :users, through: :messages
  has_many :conversation_memberships
  has_many :members, through: :conversation_memberships

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  validates :title, :author_id, presence: true
end

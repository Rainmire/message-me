class Message < ApplicationRecord
  after_commit { MessageRelayJob.perform_later(self, self.channel) }

  belongs_to :conversation
  belongs_to :user
  validates :body, presence: true
end

class Message < ApplicationRecord
  after_commit { MessageRelayJob.perform_later(self, self.conversation) }

  belongs_to :conversation
  belongs_to :user
  validates :body, presence: true

  def body
    if self.message_type == "image"
      "https://res.cloudinary.com/rainmire/image/upload/#{self[:body]}"
    else
      self[:body]
    end
  end
end

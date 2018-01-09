class Message < ApplicationRecord
  after_commit { MessageRelayJob.perform_later(self, self.conversation) }

  belongs_to :conversation
  belongs_to :user
  validates :body, presence: true

  def body
    if self.image
      "http://res.cloudinary.com/rainmire/image/upload/c_limit,h_700,w_700/#{self[:body]}.png"
    else
      self[:body]
    end
  end
end

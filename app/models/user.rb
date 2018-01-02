class User < ApplicationRecord

  attr_reader :password

  validates :email, :display_name, :password_digest, :session_token, presence: true
  validates :display_name, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  has_many :messages

  # has_many :memberships,
  # primary_key: :id,
  # foreign_key: :member_id,
  # class_name: :ConversationMembership
  #
  # has_many :conversations, through: :memberships

  has_many :conversation_memberships,
  primary_key: :id,
  foreign_key: :member_id,
  class_name: :ConversationMembership

  has_many :conversations, through: :conversation_memberships


  has_many :owned_conversations,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :Conversation

  def self.top_five_results(query_param, curr_user)
    curr_user_id = curr_user.id if curr_user
    param = '%' + query_param.downcase + '%'
    User.where.not(id: curr_user_id).
      where('lower(display_name) LIKE ?', param).limit(5)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  def profile_pic
    "http://res.cloudinary.com/rainmire/image/upload/c_lfill,g_face,h_200,r_max,w_200/#{self[:profile_pic]}.png"
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

  # def default_profile_pic
  #   debugger
  #   self.profile_pic = "v1514852231/message-me/user.png"
  # end

end

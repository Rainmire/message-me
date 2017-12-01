# Message-Me!

Message-Me is a messaging client based on the popular Messenger application by Facebook. It consists of 5 key components.

* User Authentication
* Live Chat
* Direct Conversations
* Group Conversations
* User Search

## User Authentication

Users can sign in, sign out, register, and create a guest account

**Encryption**

Message-Me requires users register with an unique email, and encrypts the password using `Bcrypt` before saving it to the database.

```
class User < ApplicationRecord
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end
```

**Secure Persistent State**

Users remain signed in until logout by generating and delivering a unique session token to the user as a cookie on every login. The token is saved to the database and compared with the user's token to maintain their login status.

```
def generate_unique_session_token
  self.session_token = new_session_token
  while User.find_by(session_token: self.session_token)
    self.session_token = new_session_token
  end
  self.session_token
end

def new_session_token
  SecureRandom.urlsafe_base64
end
```

## Live Chat

Users can experience live communication with others through Action Cable.

**Instant Message Delivery**

Upon hitting return

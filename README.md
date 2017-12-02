# Message-Me!
http://message-me-rainmire.herokuapp.com/

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

Upon hitting return, a message is send to the database through an AJAX request, where it is saved and passed along to Action Cable and broadcasted to the appropriate conversation. Users connected to the same conversation will have their page automatically updated.

The MessageRelayJob directs the saved message to the correct channel.

```
class MessageRelayJob < ApplicationJob
  def perform(message, conversation)
    message = Api::MessagesController.render(
      partial: 'api/messages/message',
      locals: { message: message }
    )
    ActionCable.server.broadcast("channel_#{conversation.id}",
                                 message: JSON.parse(message))
  end
end
```

Users are always listening to their currently selected Conversation channel. When a new message is sent, the message is received and dispatched to the store.
```
export const setSocket = channelName => dispatch => {
  if (window.App.channel) {
    removeSocket();
  }
  addSocket(channelName, dispatch);
};

const removeSocket = () => (
  window.App.cable.subscriptions.remove(window.App.channel)
);

const addSocket = (channelName, dispatch) => {
  window.App.channel = window.App.cable.subscriptions.create({
    channel: 'ChannelChannel',
    channel_name: channelName
  }, {
    connected: () => {},
    disconnected: () => {},
    received: (data) => {
      dispatch(receiveMessage(data.message));
    }
  });
};
```
## Direct Conversations

Users can start a direct conversation with another user using the Create Conversation button. This opens a new conversation form, which when submitted redirects to the newly created conversation.

## Group Conversations

Users can add new members to a direct conversation to create a group conversation. The new users are automatically added to the members list and will now be able to see this new conversation in their navigation bar and access it. Multiple members can be added at one time.

## User Search

Users can search for other users when using the add members function. A list of up to 5 users will be displayed with names matching the search input. The matches are updated for each keystroke. Clicking returned results adds them to a list of users to be added. Hitting return in the search field sends a request to add all selected users to the current conversation.

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


users = User.create([
  { email:'mitch', display_name:'Mitch', password:'adminpass', profile_pic: "message-me/default_user" },

  { email:'palpatine', display_name:'Chancellor Palpatine', password:'password', profile_pic: "message-me/seeds/palpatine" },
  { email:'anakin', display_name:'Anakin Skywalker', password:'password', profile_pic: "message-me/seeds/Anakin-Jedi" },

  { email:'duke', display_name:'Duke', password:'password', profile_pic: "message-me/seeds/duke" },
  { email:'rocky', display_name:'Rocky', password:'password', profile_pic: "message-me/seeds/rocky" },
  { email:'luna', display_name:'Luna', password:'password', profile_pic: "message-me/seeds/luna" },
  { email:'sophie', display_name:'Sophie', password:'password', profile_pic: "message-me/seeds/sophie" },

])

conversations = Conversation.create([
  { title: 'Welcome!', author_id: 1 },
  { title: 'Tragedy', author_id: 2 },
  { title: 'Goodboyes', author_id: 1 },
])

conversation_memberships = ConversationMembership.create([
  { member_id: 1, conversation_id: 1 },
  { member_id: 1, conversation_id: 2 },
  { member_id: 1, conversation_id: 3 },

  { member_id: 2, conversation_id: 2 },
  { member_id: 3, conversation_id: 2 },

  { member_id: 4, conversation_id: 3 },
  { member_id: 5, conversation_id: 3 },
  { member_id: 6, conversation_id: 3 },
  { member_id: 7, conversation_id: 3 },

])

messages = Message.create([
  { body: 'Did you ever hear the tragedy of Darth Plagueis The Wise?', message_type: "text", user_id: 2, conversation_id: 2 },
  { body: 'No?', message_type: "text", user_id: 3, conversation_id: 2 },
  { body: 'I thought not. It’s not a story the Jedi would tell you. '\
    'It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, '\
    'so powerful and so wise he could use the Force to influence the midichlorians to create life… '\
    'He had such a knowledge of the dark side, he could even keep the ones he cared about from dying.',
    message_type: "text", user_id: 2, conversation_id: 2 },
  { body: 'He could actually save people from death?', message_type: "text", user_id: 3, conversation_id: 2 },
  { body: 'The dark side of the Force is a pathway to many abilities some consider to be unnatural.', message_type: "text", user_id: 2, conversation_id: 2 },
  { body: 'What happened to him?', message_type: "text", user_id: 3, conversation_id: 2 },
  { body: 'He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. '\
    'Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. '\
    'Ironic. He could save others from death, but not himself.',
    message_type: "text", user_id: 2, conversation_id: 2 },
  { body: 'message-me/seeds/tragedy.jpg', message_type: "image", user_id: 2, conversation_id: 2 },

  { body: 'Hi everyone!', message_type: "text", user_id: 4, conversation_id: 3 },
  { body: 'message-me/seeds/pusheen-noodles.gif', message_type: "image", user_id: 5, conversation_id: 3 },
  { body: 'I\'m hungry', message_type: "text", user_id: 6, conversation_id: 3 },
  { body: 'message-me/seeds/sleeping.gif', message_type: "image", user_id: 7, conversation_id: 3 },

  { body: 'Welcome to Message-Me!', message_type: "text", user_id: 1, conversation_id: 1 },
  { body: 'You can switch between conversations you\'ve joined using the navigation bar on the left.', message_type: "text", user_id: 1, conversation_id: 1 },
  { body: 'Click the pen icon on the top left to create a new conversation with other users.', message_type: "text", user_id: 1, conversation_id: 1 },
  { body: 'message-me/seeds/create_conversation.gif', message_type: "image", user_id: 1, conversation_id: 1 },
  { body: 'Use the Add Members button on the right to invite others to join your conversation!', message_type: "text", user_id: 1, conversation_id: 1 },
  { body: 'message-me/seeds/add_members.gif', message_type: "image", user_id: 1, conversation_id: 1 },

])

messages.each.with_index do |message, idx|
  message.update_attribute :created_at, (messages.length-idx).minutes.ago
end

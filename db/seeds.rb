# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# users = User.create([
#   { email:'mitch', display_name:'Mitch', password:'adminpass', profile_pic: "v1514852231/message-me/default_user" },
#   { email:'iffybot@gmail.com', display_name:'Iffy Bot', password:'password', profile_pic: "v1514852231/message-me/default_user" },
#
#   { email:'rexxar@gmail.com', display_name:'Rexxar', password:'password', profile_pic: "v1514852231/message-me/default_user" },
#   { email:'garrosh@gmail.com', display_name:'Garrosh', password:'password', profile_pic: "v1514852231/message-me/default_user" },
#   { email:'thrall@gmail.com', display_name:'Thrall', password:'password', profile_pic: "v1514852231/message-me/default_user" },
#   { email:'jaina@gmail.com', display_name:'Jaina', password:'password', profile_pic: "v1514852231/message-me/default_user" },
#   ])
#
# conversations = Conversation.create([
#   { title: 'Welcome to Message-Me!', author_id: 1 },
#   { title: 'Rude Crew', author_id: 1 },
#   ])
#
# messages = Message.create([
#   { body: 'Welcome to Message-Me! Use the navigation bar on the left to switch between your conversations or create a new conversation.',
#     user_id: 1, conversation_id: 1 },
#   { body: 'Use the button on the right to add members to a conversation.', user_id: 1, conversation_id: 1 },
#   { body: 'Please don\'t break anything', user_id: 2, conversation_id: 1 },
#   { body: 'Have fun!', user_id: 1, conversation_id: 2 },
#   { body: 'Please don\'t break anything', user_id: 2, conversation_id: 2 },
#
#   { body: 'Greetings friend', user_id: 5, conversation_id: 1 },
#   { body: 'Hello!', user_id: 6, conversation_id: 1 },
#
#   { body: 'I will hunt you down', user_id: 3, conversation_id: 2 },
#   { body: 'I will crush you!', user_id: 4, conversation_id: 2 },
#   ])
#
# messages.each.with_index do |message, idx|
#   message.update_attribute :created_at, (messages.length-idx).minutes.ago
# end
#
# conversation_memberships = ConversationMembership.create([
#   { member_id: 1, conversation_id: 1 },
#   { member_id: 1, conversation_id: 2 },
#   { member_id: 2, conversation_id: 1 },
#   { member_id: 2, conversation_id: 2 },
#
#   { member_id: 3, conversation_id: 2 },
#   { member_id: 4, conversation_id: 2 },
#   { member_id: 5, conversation_id: 1 },
#   { member_id: 6, conversation_id: 1 },
#   ])

users = User.create([
  { email:'mitch', display_name:'Mitch', password:'adminpass', profile_pic: "v1514852231/message-me/default_user" },

  { email:'palpatine', display_name:'Chancellor Palpatine', password:'password', profile_pic: "v1514933156/message-me/profile-pics/palpatine" },
  { email:'anakin', display_name:'Anakin Skywalker', password:'password', profile_pic: "v1514933156/message-me/profile-pics/Anakin-Jedi" },

  # { email:'mitch', display_name:'Mitch', password:'password', profile_pic: "v1514852231/message-me/default_user" },
  # { email:'mitch', display_name:'Mitch', password:'password', profile_pic: "v1514852231/message-me/default_user" },
  # { email:'mitch', display_name:'Mitch', password:'password', profile_pic: "v1514852231/message-me/default_user" },
  # { email:'mitch', display_name:'Mitch', password:'password', profile_pic: "v1514852231/message-me/default_user" },
  # { email:'mitch', display_name:'Mitch', password:'password', profile_pic: "v1514852231/message-me/default_user" },

])

conversations = Conversation.create([
  { title: 'Welcome!', author_id: 1 },
  { title: 'Tragic', author_id: 2 },
])

conversation_memberships = ConversationMembership.create([
  { member_id: 1, conversation_id: 1 },
  { member_id: 1, conversation_id: 2 },
  { member_id: 2, conversation_id: 2 },
  { member_id: 3, conversation_id: 2 },
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

  { body: 'Welcome to Message-Me!', message_type: "text", user_id: 1, conversation_id: 1 },
  { body: 'You can switch between conversations you\'ve joined using the navigation bar on the left.', message_type: "text", user_id: 1, conversation_id: 1 },
  { body: 'Click the pen icon on the top left to create a new conversation with other users.', message_type: "text", user_id: 1, conversation_id: 1 },
  { body: 'Use the Add Members button on the right to invite others to join your conversation!', message_type: "text", user_id: 1, conversation_id: 1 },
  # { body: 'v1513199891/message-me/profile-pics/dog1_lymttu', message_type: "image", user_id: 1, conversation_id: 1 },

])

messages.each.with_index do |message, idx|
  message.update_attribute :created_at, (messages.length-idx).minutes.ago
end

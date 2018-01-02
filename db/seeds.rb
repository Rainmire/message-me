# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
  { email:'mitch', display_name:'Mitch', password:'adminpass', profile_pic: "v1514852231/message-me/default_user" },
  { email:'iffybot@gmail.com', display_name:'Iffy Bot', password:'password', profile_pic: "v1514852231/message-me/default_user" },

  { email:'rexxar@gmail.com', display_name:'Rexxar', password:'password', profile_pic: "v1514852231/message-me/default_user" },
  { email:'garrosh@gmail.com', display_name:'Garrosh', password:'password', profile_pic: "v1514852231/message-me/default_user" },
  { email:'thrall@gmail.com', display_name:'Thrall', password:'password', profile_pic: "v1514852231/message-me/default_user" },
  { email:'jaina@gmail.com', display_name:'Jaina', password:'password', profile_pic: "v1514852231/message-me/default_user" },
  ])

conversations = Conversation.create([
  { title: 'Welcome to Message-Me!', author_id: 1 },
  { title: 'Rude Crew', author_id: 1 },
  ])

messages = Message.create([
  { body: 'Welcome to Message-Me! Use the navigation bar on the left to switch between your conversations or create a new conversation.',
    user_id: 1, conversation_id: 1 },
  { body: 'Use the button on the right to add members to a conversation.', user_id: 1, conversation_id: 1 },
  { body: 'Please don\'t break anything', user_id: 2, conversation_id: 1 },
  { body: 'Have fun!', user_id: 1, conversation_id: 2 },
  { body: 'Please don\'t break anything', user_id: 2, conversation_id: 2 },

  { body: 'Greetings friend', user_id: 5, conversation_id: 1 },
  { body: 'Hello!', user_id: 6, conversation_id: 1 },

  { body: 'I will hunt you down', user_id: 3, conversation_id: 2 },
  { body: 'I will crush you!', user_id: 4, conversation_id: 2 },
  ])

messages.each.with_index do |message, idx|
  message.update_attribute :created_at, (messages.length-idx).minutes.ago
end

conversation_memberships = ConversationMembership.create([
  { member_id: 1, conversation_id: 1 },
  { member_id: 1, conversation_id: 2 },
  { member_id: 2, conversation_id: 1 },
  { member_id: 2, conversation_id: 2 },

  { member_id: 3, conversation_id: 2 },
  { member_id: 4, conversation_id: 2 },
  { member_id: 5, conversation_id: 1 },
  { member_id: 6, conversation_id: 1 },
  ])

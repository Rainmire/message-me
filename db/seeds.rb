# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
  { email:'user1', display_name:'user1', password:'password' },
  { email:'user2', display_name:'user2', password:'password' },
  { email:'user3', display_name:'user3', password:'password' },
  { email:'user4', display_name:'user4', password:'password' },
  { email:'user5', display_name:'user5', password:'password' }
  ])

conversations = Conversation.create([
  { title: 'user1, user2, user3', author_id: 1 },
  { title: 'user3, user4, user5', author_id: 3 },
  { title: 'user1, user5', author_id: 1 }
  ])

messages = Message.create([
  { body: 'message1', user_id: 1, conversation_id: 1 },
  { body: 'message2', user_id: 2, conversation_id: 1 },
  { body: 'message3', user_id: 3, conversation_id: 1 },
  { body: 'message4', user_id: 3, conversation_id: 2 },
  { body: 'message5', user_id: 4, conversation_id: 2 },
  { body: 'message6', user_id: 1, conversation_id: 3 },
  { body: 'message7', user_id: 5, conversation_id: 3 },
  ])

messages.each.with_index do |message, idx|
  message.update_attribute :created_at, (messages.length-idx).minutes.ago
end

conversation_memberships = ConversationMembership.create([
  { member_id: 1, conversation_id: 1 },
  { member_id: 1, conversation_id: 3 },
  { member_id: 2, conversation_id: 1 },
  { member_id: 3, conversation_id: 1 },
  { member_id: 3, conversation_id: 2 },
  { member_id: 4, conversation_id: 2 },
  { member_id: 5, conversation_id: 2 },
  { member_id: 5, conversation_id: 3 }
  ])

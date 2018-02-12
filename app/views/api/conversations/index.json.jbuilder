json.array!(@conversations) do |conversation|
  # json.extract! conversation, :id, :title

  json.conversationId conversation.id
  json.title conversation.title

  latest_message = conversation.messages.first
  
  # json.authorPic latest_message.author.profile_pic
  # json.authorName latest_message.author.display_name

  json.partial! 'api/users/user', user: latest_message.author

  json.messageBody latest_message.body
  json.messageCreatedAt latest_message.created_at
end
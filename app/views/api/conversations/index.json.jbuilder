#json.array!(@conversations) do |conversation|
#  json.extract! conversation, :id, :title, :authorPic, :authorName, :messageBody, :messageCreatedAt
#end


json.array!(@conversations) do |conversation|
  json.extract! conversation, :id, :title

  #debugger
  latest_message = conversation.messages.first
  
  json.authorPic latest_message.user.profile_pic
  json.authorName latest_message.user.display_name
  json.messageBody latest_message.body
  json.messageCreatedAt latest_message.created_at
end
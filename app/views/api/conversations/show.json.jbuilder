json.members do
  @conversation.members.each do |member|
    json.set! member.id do
      json.partial! 'api/users/user', user: member
    end
  end
end

json.messages do
  messages = @conversation.messages.order("messages.created_at DESC")
  messages.each do |message|
    json.set! message.id do
      json.partial! 'api/messages/message', message: message
    end
  end
end

# json.extract! @conversation, :id, :title

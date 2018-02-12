json.members do
  @conversation.members.each do |member|
    json.set! member.id do
      json.partial! 'api/users/user', user: member
    end
  end
end

json.messages do
  messages = @conversation.messages.order("messages.created_at ASC")
  json.array!(messages) do |message|
    json.partial! 'api/messages/message', message: message
  end
end
json.members do
  @conversation.members.each do |member|
    json.set! member.id do
      json.partial! 'api/users/user', user: member
    end
  end
end

json.messages do
  json.array!(@conversation.messages) do |message|
    json.partial! 'api/messages/message', message: message
  end
end
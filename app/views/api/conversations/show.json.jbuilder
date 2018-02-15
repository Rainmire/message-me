json.members do
  json.array!(@conversation.members) do |member|
    json.partial! 'api/users/user', user: member
  end
end

json.messages do
  json.array!(@conversation.messages) do |message|
    json.partial! 'api/messages/message', message: message unless message.message_type == 'hidden'
  end
end
#TODO remove after sockets are working

@messages.each do |message|
  json.extract! message, :body, :created_at, :user_id, :conversation_id
end

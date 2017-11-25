#TODO remove after sockets are working

@messages.each do |message|
  json.set! message do
    json.extract! message, :body, :created_at, :user_id, :conversation_id
  end
end

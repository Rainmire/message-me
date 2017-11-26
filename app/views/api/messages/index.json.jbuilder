#TODO remove after sockets are working

@messages.each do |message|
  json.set! message.created_at do
    json.partial! 'message', message: message
  end
end

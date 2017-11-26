#TODO remove after sockets are working
#TODO set by created_at instead of id

@messages.each do |message|
  json.set! message.id do
    json.partial! 'message', message: message
  end
end

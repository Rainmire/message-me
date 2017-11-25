#TODO remove after sockets are working

@messages.each do |message|
  json.set! message do
    json.partial! 'message', message: message
  end
end

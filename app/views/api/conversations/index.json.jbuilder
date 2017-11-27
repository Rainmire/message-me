@conversations.each do |conversation|
  json.set! conversation.id do
    json.extract! conversation, :title
  end
end

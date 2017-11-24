@conversations.each do |conversation|
  json.extract! conversation, :title, :messages.last
end

@conversations.each do |conversation|
  json.set! conversation.conversation_id do
    json.extract! conversation, :title, :author_name, :message_body, :message_created_at
  end
end

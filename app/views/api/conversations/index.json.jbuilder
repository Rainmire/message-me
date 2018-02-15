json.array!(@conversations) do |conversation|

  json.conversationId conversation.id
  json.title conversation.title

  json.partial! 'api/messages/message', message: conversation.messages.first unless conversation.messages.empty?

end
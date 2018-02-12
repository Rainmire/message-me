# json.messageId message.id
json.messageBody message.body
json.createdAt message.created_at
json.conversationId message.conversation_id
json.messageType message.message_type

json.partial! 'api/users/user', user: message.author

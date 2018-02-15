# json.extract! message, :id, :body, :created_at, :user_id, :conversation_id, :message_type
json.partial! 'api/users/index', users: users
json.conversationId conversationId
json.messageType "update"
#TODO only simple render right now

json.extract! @message, :body, :created_at, :user_id, :conversation_id

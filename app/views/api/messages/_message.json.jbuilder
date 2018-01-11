# parsed_body = message.parse_body

json.extract! message, :id, :body, :created_at, :user_id, :message_type

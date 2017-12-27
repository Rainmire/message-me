json.array!(@conversations) do |conversation|
  json.extract! conversation, :id, :title, :author_pic, :message_body, :message_created_at
end

json.array!(@conversations) do |conversation|
  json.extract! conversation, :id, :title, :author_pic, :author_name, :message_body, :message_created_at
end

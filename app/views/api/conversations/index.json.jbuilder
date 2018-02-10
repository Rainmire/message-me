json.array!(@conversations) do |conversation|
  json.extract! conversation, :id, :title, :authorPic, :messageBody, :messageCreatedAt
end

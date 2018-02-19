class ChatChannel < ApplicationCable::Channel
  def subscribed
    reset_streams
  end

  def reset_streams
    puts "RESETTING STREAMS"
    stop_all_streams

    puts "CLEARING CACHE"
    # ActiveRecord::Base.connection.query_cache.clear

    memberships = current_user.conversation_memberships.reload
    memberships.each do |membership|
      # puts "CONVERSATION: #{membership.conversation_id}"
      stream_from "chat_#{membership.conversation_id}"
    end
    # puts "ACTION_METHODS: "
    # ChatChannel.action_methods.each do |el|
    #   puts el
    # end
    # foo = User.find(current_user.id).conversation_memberships.last
    # puts foo.conversation_id

  end

  def add_stream(params)
    puts "ADDING STREAM: #{params["id"]}"
    stream_from "chat_#{params["id"]}"
  end

  # def unsubscribed
  #   stop_all_streams
  # end
end

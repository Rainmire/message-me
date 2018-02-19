class ChatChannel < ApplicationCable::Channel
  def subscribed
    reset_streams
  end

  def reset_streams
    stop_all_streams

    memberships = current_user.conversation_memberships.reload
    memberships.each do |membership|
      stream_from "chat_#{membership.conversation_id}"
    end
  end

  def add_stream(params)
    puts "ADDING STREAM: #{params["id"]}"
    stream_from "chat_#{params["id"]}"
  end

end

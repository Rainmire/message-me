class ChatChannel < ApplicationCable::Channel
  def subscribed
    puts "CURRENT_USER: #{current_user}"
    # stream_from "channel_#{params[:channel_name]}"
    stream_from "chat_1"
    stream_from "chat_2"
    stream_from "chat_3"

  end
end

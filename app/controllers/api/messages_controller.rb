class Api::MessagesController < ApplicationController

  def create
    @message = Message.new(message_params)
    @message.user_id = current_user.id
    @message.conversation_id = params[:conversation_id]

    @message.save

  end

  private
  def message_params
    params.require(:message).permit(:body)
  end

end

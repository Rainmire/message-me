class Api::MessagesController < ApplicationController
  before_action :require_logged_in

  def create
    message = Message.new(message_params)
    user = current_user
    message.author_id = user.id
    message.conversation_id = user.conversations.find(params[:conversation_id]).id

    if message.save
      render status: :ok
    else
      render json: conversation.errors.full_messages, status: 422
    end

  end

  private
  def message_params
    params.require(:message).permit(:body, :message_type)
  end

end

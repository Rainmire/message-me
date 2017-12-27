class Api::MessagesController < ApplicationController

  def create
    @message = Message.new(message_params)
    @message.user_id = current_user.id
    @message.conversation_id = params[:conversation_id]

    @message.save

  end

  def show
    @message = Message.find(params[:id])
  end

  def index
    @messages = Message.all
    # render :index
    # render json: Message.all
  end

  private
  def message_params
    params.require(:message).permit(:body)
  end

end

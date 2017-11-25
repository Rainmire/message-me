class Api::MessagesController < ApplicationController

  def create
    @message = Message.new(message_params)
    @message.user_id = current_user.id
    @message.conversation_id = 1 #TODO change to params[:id] after nesting route under convo

    if @message.save
      render :show
    else
      render json: @message.errors.full_messages , status: 422
    end

  end

  def index
    # @messages = Message.all
    # render :index
    render json: Message.all
  end

  private
  def message_params
    params.require(:message).permit(:body)
  end

end

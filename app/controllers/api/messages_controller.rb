class Api::MessagesController < ApplicationController

  def create
    
    @message = Message.new(message_params)
    @user = current_user
    @message.author_id = @user.id
    @message.conversation_id = @user.conversations.find(params[:conversation_id]).id

    @message.save
    render 'api/messages/show'
  end

  private
  def message_params
    params.require(:message).permit(:body, :message_type)
  end

end

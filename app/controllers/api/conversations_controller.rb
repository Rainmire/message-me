class Api::ConversationsController < ApplicationController

  def create
    # @conversation = Conversation.new(
    #   params[:conversation][:title],
    #   params[:conversation][:author_id]
    # )
    #
    # if @conversation.save
    #   (@conversation)
    #   render "api/conversations/show"
    # else
    #   render json: @conversation.errors.full_messages, status: 422
    # end
  end

  def destroy
  end

  def show
  end

  def index
    @conversations = Conversation.where(author_id: current_user.id)
    #TODO Order by created_at of newest message
    # render json: @conversations
  end

  def update
  end

end

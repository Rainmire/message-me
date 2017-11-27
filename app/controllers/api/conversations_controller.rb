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

  def members
    # @conversation = Conversation.joins(:conversation_memberships).find_by(member_id: params[:id])
    @conversation = current_user.conversations.find_by_id(params[:id])
    if @conversation
      @users = @conversation.members
      render "/api/users/index"
    else
      render json: "Conversation does not exist", status: 400
    end
  end
end

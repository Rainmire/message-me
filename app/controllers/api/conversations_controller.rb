class Api::ConversationsController < ApplicationController

  def create
    title = current_user.display_name
    author_id = current_user.id
    members = params[:users]

    @conversation = Conversation.new( title: title, author_id: author_id )

    if @conversation.save
      #add current_user
      membership = ConversationMembership.new(
        member_id: author_id, conversation_id: @conversation.id )
      membership.save
      members.keys.each do |id|
        membership = ConversationMembership.new(
          member_id: id, conversation_id: @conversation.id )
        membership.save
      end
      render json: @conversation.id, status: :ok

    else
      render json: @conversation.errors.full_messages, status: 422
    end

    # if @conversation.save
    #   conversation_membership = ConversationMembership.new(
    #     member_id: author_id, conversation_id: @conversation.id )
    #   target_conversation_membership = ConversationMembership.new(
    #     member_id: targetUserId, conversation_id: @conversation.id )
    #   if conversation_membership.save && target_conversation_membership.save
    #     render 'api/conversations/show'
    #   else
    #     render json: conversation_membership.errors.full_messages, status: 422
    #   end
    # else
    #   render json: @conversation.errors.full_messages, status: 422
    # end
  end

  # def addMember
  #   @conversationMembership = ConversationMembership.new(member_id:
  #     params[:conversation]
  #   )
  # end

  def destroy
  end

  def show
    @conversation = current_user.conversations.find(params[:id])
    # @conversation = Conversation.find(params[:id])
    if @conversation
      # render json: show
    else
      render json: "Conversation does not exist", status: 400
    end
  end

  def index
    @conversations = current_user.conversations
    #TODO Order by created_at of newest message
    # render json: @conversations
  end

  def update
    @conversation = current_user.conversations.find(params[:id])
    if @conversation
      @users = []
      params[:users].keys.each do |id|
        if !ConversationMembership.exists?(['member_id = ? and conversation_id = ?', id, @conversation.id])
          membership = ConversationMembership.new(member_id: id, conversation_id: @conversation.id)
          membership.save
          @users << User.find(id)
        end
      end
      render "api/users/index"
    else
      render json: "Conversation does not exist", status: 400
    end
  end

end

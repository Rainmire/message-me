class Api::ConversationsController < ApplicationController

  def create
    title = current_user.display_name
    author_id = current_user.id
    member_ids = params[:userIds]
    
    i = 1
    member_ids.each do |id|
      if i >= 3
        title += ", etc..."
        break
      end
      member_name = User.find(id).display_name
      title += ", #{member_name}"
      i += 1
    end

    member_ids.unshift(author_id)
    conversation = Conversation.new( title: title, author_id: author_id )

    if conversation.save
      # membership = ConversationMembership.new(
      #   member_id: author_id, conversation_id: conversation.id )
      # membership.save
      member_ids.each do |id|
        membership = ConversationMembership.new(
          member_id: id, conversation_id: conversation.id )
        membership.save
      end
      #create hidden message
      placeholder = Message.new(body: 'DO NOT RENDER', message_type: 'hidden', author_id: author_id, conversation_id: conversation.id)
      placeholder.save

      NewConversationJob.perform_later(member_ids, conversation)

      render json: conversation.id, status: :ok
    else
      render json: conversation.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  def show
    @conversation = current_user.conversations.includes(:members, messages: :author).order("messages.created_at ASC").find(params[:id])
    render json: "Conversation does not exist", status: 400 if !@conversation
  end

  def index
    @conversations = current_user.conversations.includes(messages: :author).order("messages.created_at DESC").distinct
  end

  def update
    @conversation = current_user.conversations.find(params[:id])
    if @conversation
      @users = []
      params[:userIds].each do |id|
        if !ConversationMembership.exists?(['member_id = ? and conversation_id = ?', id, @conversation.id])
          membership = ConversationMembership.new(member_id: id, conversation_id: @conversation.id)
          membership.save
          @users << User.find(id)
        end
      end
      UpdateMembersJob.perform_later(@users, @conversation.id) unless @users.empty?
    else
      render json: "Conversation does not exist", status: 400
    end
  end

end

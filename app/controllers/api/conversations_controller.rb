class Api::ConversationsController < ApplicationController

  def create
    title = current_user.display_name
    author_id = current_user.id
    members = params[:users]

    i = 1
    members.keys.each do |id|
      if i >= 3
        title += ", etc..."
        break
      end
      member_name = User.find(id).display_name
      title += ", #{member_name}"
      i += 1
    end

    conversation = Conversation.new( title: title, author_id: author_id )

    if conversation.save
      #add current_user
      membership = ConversationMembership.new(
        member_id: author_id, conversation_id: conversation.id )
      membership.save
      members.keys.each do |id|
        membership = ConversationMembership.new(
          member_id: id, conversation_id: conversation.id )
        membership.save
      end
      render json: conversation.id, status: :ok

    else
      render json: conversation.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  def show
    # debugger
    @conversation = current_user.conversations.find(params[:id])
    render json: "Conversation does not exist", status: 400 if !@conversation
  end

  def index
    raw_conversations = current_user.conversations
    @conversations = []
    raw_conversations.each do |conversation|
      last_message = conversation.messages.order("messages.created_at DESC").first
      message_body = ""
      message_created_at = nil
      if last_message.nil?
        message_created_at = conversation.created_at
        author_pic = current_user.profile_pic
      else
        message_created_at = last_message.created_at
        author_pic = last_message.user.profile_pic
        message_body = last_message.user.display_name + ": " + last_message.body
      end
      @conversations << Hash[title: conversation.title,
                             author_pic: author_pic,
                             message_body: message_body,
                             message_created_at: message_created_at,
                             id: conversation.id]
    end
    @conversations.sort! {|x,y| y[:message_created_at] <=> x[:message_created_at] }
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
      UpdateMembersJob.perform_later(@conversation.id)
      render "api/users/index"
    else
      render json: "Conversation does not exist", status: 400
    end
  end

end

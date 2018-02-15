class Api::UsersController < ApplicationController

  def index
    @users = User.top_five_results(search_params[:query], current_user)
    render :index
  end

  def create
    @user = User.new({display_name: params[:display_name],
                    email: params[:email],
                    password: params[:password],
                    profile_pic: "v1514852231/message-me/default_user"})
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = current_user
    if @user.update(profile_pic: params[:url])
      render "api/users/show"
    else
      render json: user.errors.full_messages, status: 422
    end
  end

  def create_guest
    @user = User.new({display_name: params[:display_name],
                    email: params[:email],
                    password: "password",
                    profile_pic: "v1514852231/message-me/default_user"})
    if @user.save
      membership1 = ConversationMembership.new(member_id: @user.id, conversation_id: 1)
      membership2 = ConversationMembership.new(member_id: @user.id, conversation_id: 2)
      membership3 = ConversationMembership.new(member_id: @user.id, conversation_id: 3)

      UpdateMembersJob.perform_later([@user], membership1.conversation_id) if membership1.save
      UpdateMembersJob.perform_later([@user], membership2.conversation_id) if membership2.save      
      UpdateMembersJob.perform_later([@user], membership3.conversation_id) if membership3.save

      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  private

  def search_params
    params.require(:search).permit(:query)
  end

end

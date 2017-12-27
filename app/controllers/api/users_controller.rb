class Api::UsersController < ApplicationController

  def index
    @users = User.top_five_results(search_params[:query], current_user)
    render :index
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def create_guest
    @user = User.new(user_params)
    if @user.save
      membership1 = ConversationMembership.new(member_id: @user.id, conversation_id: 1)
      membership2 = ConversationMembership.new(member_id: @user.id, conversation_id: 2)
      membership1.save
      membership2.save

      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  private

  def user_params
    params.require(:user).permit(:display_name, :email, :password)
  end

  def search_params
    params.require(:search).permit(:query)
  end
end

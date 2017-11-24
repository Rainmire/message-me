class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def conversations
    @conversations = current_user.conversations
    render "api/users/conversations"
  end


  private

  def user_params
    params.require(:user).permit(:display_name, :email, :password)
  end
end

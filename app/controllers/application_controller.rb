class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  protect_from_forgery prepend: true
  
  helper_method :current_user, :logged_in?

  private

  def current_user
    ###TODO: REMOVE AFTER TESTING
    @current_user = User.first
    return @current_user
    ###


    token = cookies.encrypted[:session_token]
    return nil unless token
    @current_user ||= User.find_by(session_token: token)
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token!
    # session[:session_token] = user.session_token
    cookies.encrypted[:session_token] = user.session_token

    @current_user = user
  end

  def logout
    current_user.session_token = nil
    cookies.encrypted[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    unless current_user
      render json: { base: ['not logged in'] }, status: 401
    end
  end
end

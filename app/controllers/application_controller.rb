class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?

  def login!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    current_user = nil
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !current_user.nil?
  end

  def require_logged_out
    redirect_to user_url(current_user) if logged_in?
  end

  def require_logged_in
    redirect_to new_session_url unless logged_in?
  end
end

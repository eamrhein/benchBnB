class ApplicationController < ActionController::Base
  helper_method :current_user, :login?, :logout!

  private

  def current_user
    return nil unless session[:session_token] 
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login?
    !!current_user
  end

  def login!(user)
    session[:session_token] = user.reset_token!
    @current_user = user
  end

  def logout!
    current_user.reset_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def redirect_if_login
    redirect_to root_url if login?
  end

  def redirect_if_logout
    redirect_to new_api_session_url unless login?
  end

  def deny_if_logout
    unless login?
       render json: ['You must be logged in to do that'], status: :unauthorized
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end

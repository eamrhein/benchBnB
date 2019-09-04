class Api::SessionsController < ApplicationController
  before_action :redirect_if_login, except: :destroy

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login!(@user)
    else
      @user = User.new
      flash.now[:errors] = {base: ['Invalid username or password']}
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render json: {}
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end

class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      puts "--- DID FIND THE USER ---"
      login!(@user)
      render "api/users/show"
    else
      puts "--- DID NOT FIND THE USER ---"
      render json: ["Invalid login credentials"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render "api/users/show"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end
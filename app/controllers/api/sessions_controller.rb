class Api::SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user 
      login!(@user)
      render "api/users/show"
    else 
      render json: ["  - Login or password is invalid"], status: 401
    end
  end
  
  def destroy
    @user = current_user;
    if @user 
      logout!
      render "api/users/show"
    else  
      render json: ["Nobody Signed In"], status: 404
    end  
  end
end
  
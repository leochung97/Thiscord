class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render "/api/users/_current_user", current_user: @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json: ["User cannot be found!"], status: 404
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
  end

  private
  def user_params
    params.require(:user).permit(:email, :username, :password)
  end
end
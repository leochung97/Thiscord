class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index 
    @users = User.all
    render :index
  end
  
  def show 
        @user = User.find(params[:id])
        render :show
  end

  def create
      @user = User.new(user_params)
      @user.user_tag = tag_creator()
      if @user.save
        login!(@user)
        render :show
      else
        render json: @user.errors.full_messages, status: 422
    end

  end
  
  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show 
    else 
      render json: @user.errors.full_messages, status: 401 
    end
  end

  def destroy
    @user = User.find(params[:id])
    if @user.destroy 
      render :show 
    else  
      render json: @user.errors.full_messages, status: 422
    end
  end
  
  private
  def tag_creator 
    tag = '';
    4.times do
      tag += rand(10).to_s
    end
    return tag
  end

  def user_params
      params.require(:user).permit(:username, :password, :email)
  end
end
  
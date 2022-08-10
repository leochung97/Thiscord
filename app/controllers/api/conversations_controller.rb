class Api::ConversationsController < ApplicationController 
  skip_before_action :verify_authenticity_token

  def index 
    @current_user = current_user;
    @conversations = Conversation.all
    render :index
  end

  def show 
    @conversation = Conversation.find(params[:id])
    @current_user = current_user 
    render :show
  end

  def create
    @conversation = Conversation.new()
    @current_user = current_user
    @conversation.owner_id = @current_user.id
    if @conversation.save
      render :show
    else  
      render json: @conversation.errors.full_messages, status: 422
    end
  end

  def destroy
    @conversation = Conversation.find(params[:id])
    if @conversation.destroy 
      render :show 
    else  
      render json: @conversation.errors.full_messages, status: 422
    end
  end
end
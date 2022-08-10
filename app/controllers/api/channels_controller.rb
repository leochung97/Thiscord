class Api::ChannelsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index 
    @channels = Channel.all
    render :index
  end

  def show 
    @channel = Channel.find(params[:id])
    render :show
  end

  def create 
      @channel = Channel.new(channel_params)
      @channel.server_id = params[:server_id]
      if @channel.save
        render :show
      else  
        render json: @channel.errors.full_messages, status: 422
      end
  end

  def update 
    @channel = Channel.find(params[:id])
    if @channel.update(channel_params)
      render :show
    else  
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def destroy 
    @channel = Channel.find(params[:id])
    if @channel.destroy
      render :show
    else  
      render json: @channel.errors.full_messages, status: 422
    end
  end

  private 
  def channel_params 
    params.require(:channel).permit(:name)
  end
end
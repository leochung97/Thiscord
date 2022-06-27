class Api::ChannelsController < ApplicationController
  before_action :require_logged_in

  def show
    @channel = Channel.find(params[:id])

    if @channel
      render :show
    else
      render json: ["No channel exists!"], status: 404
    end
  end

  def create
    @channel = Channel.new(channel_params)
    print @channel

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
    @channel.destroy
  end

  private

  def channel_params
    params.require(:channel).permit(:channel_name, :server_id)
  end
end

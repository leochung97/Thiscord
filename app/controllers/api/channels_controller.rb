class Api::ChannelsController < ApplicationController
  before_action :require_logged_in

  def index
    @server = current_user.servers.find(params[:id])
    @channels = @server.channels
    render :index
  end

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
    @channel.admin = current_user

    if @channel.save
      add_channel_to_server
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def update
    @server = Server.find(params[:id])
    if @server.update(server_params)
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def destroy
    @server = Server.find(params[:id])
    @server.destroy;
  end

  private

  def channel_params
    params.require(:channel).permit(:channel_name)
  end

  def add_channel_to_server
    @server = current_user.servers.find(params[:id])
    @server.channels << @channel
    @server.save!
  end
end

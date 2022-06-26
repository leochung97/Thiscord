class Api::ServersController < ApplicationController
  before_action :require_logged_in

  def index
    @servers = current_user.servers
    render :index
  end

  def show
    @server = current_user.servers.find(params[:id])

    if @server
      render :show
    else
      render json: ["You're not a part of this server!"], status: 404
    end
  end

  def create
    @server = Server.new(server_params)
    @server.admin = current_user

    if @server.save
      add_self_as_member
      render :show
    else
      render json: @server.errors.full_messages, status: 422
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

  def server_params
    params.require(:server).permit(:server_name)
  end

  def add_self_as_member
    current_user.servers << @server
    current_user.save!
  end
end
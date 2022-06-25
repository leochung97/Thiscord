class Api::ServersController < ApplicationController
  before_action :require_logged_in

  def index
    @servers = Server.all
    render :index
  end

  def show
    @server = Server.find(params[:id])

    if @server
      render :show
    else
      render json: ["Invalid server ID."], status: 404
    end
  end

  def create
    @server = Server.new(server_params)
    @server.admin = current_user

    if @server.save
      @server_memberships = Server
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def update
    @server = Server.find(params[:id])
  end

  def destroy
    @server = Server.find(params[:id])
    if @server.admin = current_user
      server.destroy
      render :index
    else
      render json: ["You do not own this server!"], status: 422
    end
  end

  private

  def server_params
    params.require(:server).permit(:server_name, :path)
  end

  def add_self_as_member
    current_user.server_index << @server.id
    current_user.save!
  end
end
class Api::ServersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @servers = Server.all
    render :index
  end

  def show
    @server = Server.find(params[:id])
    render :show
  end

  def create
    @server = Server.new(server_params)
    @server.owner_id = current_user.id
    if @server.save 
      @server_memberships = ServerMembership.create(user_id: current_user.id, server_id: @server.id)
      @channel = Channel.create(name: 'General Discussion', server_id: @server.id)
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
    if current_user.id == @server.owner_id 
      @server.destroy 
      render :show 
    else  
      render json: ['Only the owner of the server can delete it'], status: 422
    end
  end

  private
  def server_params
    params.require(:server).permit(:name, :is_public)
  end
end
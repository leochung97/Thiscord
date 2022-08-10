class Api::FriendshipsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @current_user = current_user
    @friend = User.find(params[:friendship][:friend_id])
    @friendship = Friendship.new(user_id: @current_user.id, friend_id: @friend.id)
    @friendship_reciprocated = Friendship.new(user_id: @friend.id, friend_id: @current_user.id)

    if @friendship.save && @friendship_reciprocated.save
      @conversation = Conversation.create!(owner_id: @current_user.id, name: @current_user.username + ', ' + @friend.username)
      ConversationParticipant.create!(conversation_id: @conversation.id, participant_id: @current_user.id)
      ConversationParticipant.create!(conversation_id: @conversation.id, participant_id: @friend.id)
      render :show
    else  
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def destroy
    @friendship = Friendship.find_by(user_id: current_user.id, friend_id: params[:friendship][:friend_id])
    @friendship_reciprocated = Friendship.find_by(user_id: params[:friendship][:friend_id], friend_id: current_user.id)
    @friendship.destroy
    @friendship_reciprocated.destroy
    render "api/conversations/show"
  end
end
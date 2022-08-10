class Api::ConversationParticipantsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @conversation_participant = ConversationParticipant.new(conversation_participant_params)
    @conversation = Conversation.find(params[:conversation_participant][:conversation_id])
    if @conversation_participant.save 
      render :show
    else  
      render json: @conversation_participant.errors.full_messages, status: 422
    end
  end

  def destroy
    @conversation_participant = ConversationParticipant.find_by(conversation_participant_params)
    @conversation = Conversation.find(params[:conversation_participant][:conversation_id])
    @conversation_participant.destroy
    render "api/conversations/show"
  end

  private 
  def conversation_participant_params
    params.require(:conversation_participant).permit(:conversation_id, :participant_id)
  end
end
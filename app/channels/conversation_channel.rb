class ConversationChannel < ApplicationCable::Channel
  def subscribed
    conversation = Conversation.find_by(id: params[:id])
    stream_for conversation
  end

  def unsubscribed
  end
end
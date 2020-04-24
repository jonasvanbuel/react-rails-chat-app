class Api::V1::MessagesController < ApplicationController
  before_action :set_channel

  def index
    original_messages = Message.where(channel_id: @param_channel.id)
    new_messages_array = []
    original_messages.each do |message|
      reformatted_message = {
        id: message.id,
        author: User.find(message.user_id).email,
        content: message.content,
        created_at: message.created_at
      }
      new_messages_array << reformatted_message
    end
    render json: new_messages_array
  end

  def create
    message = Message.new(
      content: params[:content],
      user: current_user,
      channel: @param_channel
    )
    message.save
    render json: message
  end

  private

  def set_channel
    @param_channel = Channel.find_by(name: params[:channel_id])
  end
end

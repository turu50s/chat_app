class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room_channel"
    # binding.pry
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    # binding.pry
    message = Message.create!(content: data['message'])
    template = ApplicationController.renderer.render(partial: 'messages/message', locals: {message: message})
    # binding.pry
    # ActionCable.server.broadcast 'room_channel', data['message']
    ActionCable.server.broadcast 'room_channel', template
  end
end


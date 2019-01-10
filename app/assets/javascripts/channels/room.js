App.room = App.cable.subscriptions.create("RoomChannel", {
  connected: function() {
    // Called when the subscription is ready for use on the server
    console.log('connected')
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function(message) {
    // Called when there's incoming data on the websocket for this channel
    // alert(data);
    const messages = document.getElementById('messages');
    // messages.innerHTML += `<p>${message}</p>`
    messages.innerHTML += message
  },

  speak: function(content) {
    return this.perform('speak', {message: content});
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('chat-input');
  const button = document.getElementById('button');
  button.addEventListener('click', function() {
    const content = input.value;
    // debugger;
    App.room.speak(content);
    input.value = '';
  });
});
const socket = io();
const form = document.getElementById('chat');
const input = document.getElementById('message');
const messages = document.getElementById('messages');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const message = input.value;
  input.value = '';
  socket.emit('chat message', message)
})

socket.on('chat message', (data) => {
  const messageItem = document.createElement('li');
  messageItem.classList.add('message-item');
  messageItem.innerText = data;
  messages.appendChild(messageItem);
})
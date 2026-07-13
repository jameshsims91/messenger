import consumer from "channels/consumer"

const messageChannel = consumer.subscriptions.create("MessageChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    const messageDisplay = document.querySelector('#message-display')
    messageDisplay.insertAdjacentHTML('beforeend', this.template(data))

    messageDisplay.scrollTop = messageDisplay.scrollHeight;
  },

  template(data) {
    return `<article class="message">
              <div class="message-header">
                <p>${data.user.email}</p>
              </div>
              <div class="message-body">
                <p>${data.body}</p>
              </div>
            </article>`
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.querySelector('#message-input');
  const sendButton = document.querySelector('#send-button');

  if (inputField && sendButton) {
    sendButton.addEventListener("click", () => {
      setTimeout(() => { inputField.value = ''}, 10);
    });
  }
});

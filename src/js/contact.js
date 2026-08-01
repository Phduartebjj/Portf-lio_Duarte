export function contactMessage() {
  const messageBox = document.getElementById("contact-message");

  const message = messageBox.value.trim();
  sendMessage(message, messageBox);
}

function sendMessage(message, input) {
  if (message !== "") {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5521965494017?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    input.value = "";
  }
}

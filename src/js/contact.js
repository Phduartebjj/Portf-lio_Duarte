
export function contactMessage(e, input) {
  if (e.key === "Enter") {
    if (e.shiftKey) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    const message = input.value.trim();

    sendMessage(message,input);
  }
}

function sendMessage(message,input) {
  if (message !== "") {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5521965494017?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    input.value = "";
  }
}

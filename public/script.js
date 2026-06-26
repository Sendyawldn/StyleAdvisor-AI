const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

let conversation = [];

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage("user", userMessage);
  input.value = "";

  conversation.push({ role: "user", text: userMessage });

  const thinkingId = "thinking-" + Date.now();
  appendMessage("bot", "Memilihkan outfit terbaik... ✨", thinkingId);

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ conversation }),
    });

    const data = await response.json();
    removeMessage(thinkingId);

    if (response.ok && data.result) {
      appendMessage("bot", data.result);
      conversation.push({ role: "model", text: data.result });
    } else {
      appendMessage(
        "bot",
        "Maaf, gagal mendapatkan respons dari server fashion.",
      );
    }
  } catch (error) {
    removeMessage(thinkingId);
    appendMessage("bot", "Waduh, koneksi ke server terputus 😢");
  }
});

function appendMessage(sender, text, id = null) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);

  if (sender === "bot") {
    msg.innerHTML = typeof marked !== "undefined" ? marked.parse(text) : text;
  } else {
    msg.textContent = text;
  }

  if (id) {
    msg.id = id;
  }

  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function removeMessage(id) {
  const msg = document.getElementById(id);
  if (msg) {
    msg.remove();
  }
}

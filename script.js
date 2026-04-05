const btn = document.getElementById("btn")
const nameInput = document.getElementById("nameInput")
const message = document.getElementById("message")

btn.addEventListener("click", function() {
  const name = nameInput.value

  if (name === "") {
    message.textContent = "名前を入力してください！"
    message.style.color = "red"
  } else {
    message.textContent = "こんにちは、" + name + "さん！"
    message.style.color = "#4a6cf7"
  }
})
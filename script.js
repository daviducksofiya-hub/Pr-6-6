const form = document.getElementById("mailForm");
    const resultMessage = document.getElementById("resultMessage");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("email").value.trim();
      const messageText = document.getElementById("messageText").value.trim();

      if (!email || !messageText) {
        resultMessage.className = "message error";
        resultMessage.textContent = "Заповніть email і повідомлення.";
        return;
      }

      resultMessage.className = "message success";
      resultMessage.textContent = "Повідомлення відправлено.";
      form.reset();
    });

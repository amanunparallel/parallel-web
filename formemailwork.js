// 2022 version

document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector('[validation="email"]');
  const emailPattern = /^[^\s@]+@(?!gmail\.|yahoo\.|hotmail\.|outlook\.)([a-z0-9.-]+\.[a-z]{2,})$/i;
  const submitBtn = document.querySelector('[validation="submitcontactform"]');
  const toolTip = document.querySelector('[validation="email-tooltip"]');
  const messageInput = document.querySelector('[validation="textarea"]');
  const messageToolTip = document.querySelector(
    '[validation="tooltip-message"]'
  );

  if (emailInput) {
    let emailEntered = false;
    let messageEntered = false;

    emailInput.addEventListener("input", function () {
      const email = emailInput.value.trim();

      if (email === "") {
        toolTip.style.display = "none";
        submitBtn.setAttribute("disabled", true);
        return;
      }

      if (emailPattern.test(email)) {
        emailEntered = true;
      } else {
        emailEntered = false;
      }

      if (emailEntered && messageEntered) {
        submitBtn.removeAttribute("disabled");
      } else {
        submitBtn.setAttribute("disabled", true);
      }
    });

    emailInput.addEventListener("blur", function () {
      const email = emailInput.value.trim();

      if (email === "") {
        toolTip.style.display = "none";
        submitBtn.setAttribute("disabled", true);
        return;
      }

      if (email.indexOf("@") === -1) {
        toolTip.style.display = "none";
        submitBtn.setAttribute("disabled", true);
        emailEntered = false;
        return;
      }

      if (!emailPattern.test(email)) {
        toolTip.style.display = "block";
        submitBtn.setAttribute("disabled", true);
        emailEntered = false;
      } else {
        toolTip.style.display = "none";
      }

      if (emailEntered && messageEntered) {
        submitBtn.removeAttribute("disabled");
      } else {
        submitBtn.setAttribute("disabled", true);
      }
    });

    function validateInput() {
      var input = messageInput.value;
      if (input.includes("http") || input.includes("www")) {
        messageToolTip.style.display = "block";
        messageEntered = false;
      } else {
        messageToolTip.style.display = "none";
        messageEntered = true;
      }

      if (emailEntered && messageEntered) {
        submitBtn.removeAttribute("disabled");
      } else {
        submitBtn.setAttribute("disabled", true);
      }
    }

    // Detect changes in the text area
    messageInput.addEventListener("input", validateInput);
  }
});

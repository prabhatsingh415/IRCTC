console.log("Login script loaded ✅");
// Grab modal elements once, reuse throughout
const modal = document.getElementById("modal");
const overlay = document.getElementById("modalOverlay");
const modalMsg = document.getElementById("modalMessage");
const btnClose = document.getElementById("modalClose");
const btnOk = document.getElementById("modalOk");

// Show the modal with a given message
function showModal(message) {
  modalMsg.textContent = message;
  overlay.classList.remove("hidden"); // un‑blur and reveal overlay
  modal.classList.remove("hidden"); // reveal centered modal
}

// Hide the modal and restore background
function hideModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

// Close modal when user clicks OK
btnOk.addEventListener("click", hideModal);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const loader = document.getElementById("loader") || null;
  const blurOverlay = document.getElementById("blurOverlay") || null;

  function showLoader(show) {
    if (loader && blurOverlay) {
      loader.classList.toggle("hidden", !show);
      blurOverlay.classList.toggle("hidden", !show);
    }
  }

  if (!form) {
    showModal("Something went wrong , Please try again later!");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    showLoader(true);

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      showModal("Please enter both email and password.");
      showLoader(false);
      return;
    }

    try {
      const response = await fetch(
        "https://irctc-ticket-booking-app.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          credentials: "include", // include cookies for session
          body: new URLSearchParams({ email, password }),
        }
      );

      const data = await response.json();
      console.log("Login response:", data);

      if (data.message === "Login successful") {
        showModal("✅ Login successful!");
        window.location.href = "/index.html";
      } else {
        showModal(data.message);
      }
    } catch (err) {
      showModal("Something went wrong. Please try again.");
    } finally {
      showLoader(false);
    }
  });
});

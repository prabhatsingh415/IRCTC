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

// Ensure DOM is ready before accessing form elements
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded");
  const form = document.getElementById("signupForm");
  const otpSection = document.getElementById("otpSection");
  const passwordSection = document.getElementById("passwordSection");
  const loader = document.getElementById("loader");
  const blurOverlay = document.getElementById("blurOverlay");

  // If any critical element is missing, show an error and bail out
  if (!form || !otpSection || !passwordSection || !loader || !blurOverlay) {
    showModal("Something Went Wrong!");
    return;
  }

  // Track which signup step we’re on
  let currentStep = "sendEmail";

  // Toggle loader + blur overlay
  function showLoader(show) {
    loader.classList.toggle("hidden", !show);
    blurOverlay.classList.toggle("hidden", !show);
  }

  // Main form submission handler
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Client‑side validation per step
    if (currentStep === "sendEmail") {
      const userName = document.getElementById("username").value.trim();
      const userEmail = document.getElementById("email").value.trim();
      if (!userName || !userEmail) {
        showModal("Please enter both username and email.");
        showLoader(false);
        return;
      }
    } else if (currentStep === "verifyCode") {
      const otpVal = document.getElementById("otp").value.trim();
      if (!otpVal) {
        showModal("Please enter the OTP.");
        showLoader(false);
        return;
      }
    } else if (currentStep === "setPassword") {
      const pwd = document.getElementById("password").value.trim();
      if (!pwd) {
        showModal("Please enter a password.");
        showLoader(false);
        return;
      }
    }

    // Show loader while awaiting server
    showLoader(true);
    try {
      let res, data;
      const commonOpts = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        credentials: "include",
      };

      // Build request based on current step
      if (currentStep === "sendEmail") {
        const body = new URLSearchParams({
          step: "sendEmail",
          userName: document.getElementById("username").value.trim(),
          userEmail: document.getElementById("email").value.trim(),
        });
        res = await fetch(
          "https://irctc-ticket-booking-app.onrender.com/SignUp",
          { ...commonOpts, body }
        );
      } else if (currentStep === "verifyCode") {
        const body = new URLSearchParams({
          step: "verifyCode",
          InputCode: document.getElementById("otp").value.trim(),
        });
        res = await fetch(
          "https://irctc-ticket-booking-app.onrender.com/SignUp",
          { ...commonOpts, body }
        );
      } else if (currentStep === "setPassword") {
        const body = new URLSearchParams({
          step: "setPassword",
          password: document.getElementById("password").value.trim(),
        });
        res = await fetch(
          "https://irctc-ticket-booking-app.onrender.com/SignUp",
          { ...commonOpts, body }
        );
      }

      // Parse JSON response
      data = await res.json();

      // Handle server response per step
      if (currentStep === "sendEmail") {
        showModal(data.message);
        if (data.success === "true" || data.success === true) {
          otpSection.classList.remove("hidden");
          currentStep = "verifyCode";
        } else {
          showModal("Please enter a valid email address!");
        }
      } else if (currentStep === "verifyCode") {
        if (data.success === "true" || data.success === true) {
          passwordSection.classList.remove("hidden");
          currentStep = "setPassword";
        } else {
          showModal("Invalid OTP. Please try again.");
          const otpInput = document.getElementById("otp");
          otpInput.value = "";
          otpInput.focus();
          passwordSection.classList.add("hidden");
        }
      } else if (currentStep === "setPassword") {
        showModal(data.message);
        if (data.success === "true" || data.success === true) {
          // On OK click (wired above), hide modal then redirect
          btnOk.onclick = () => {
            hideModal();
            form.reset();
            window.location.href = "/Pages/BookTicket.html";
          };
        } else {
          btnOk.onclick = hideModal; // restore default close behavior
          showModal(data.message);
        }
      }
    } catch (err) {
      // Network/server error
      showModal("Something went wrong! Please try again.");
    } finally {
      // Always hide loader when done
      showLoader(false);
    }
  });
});

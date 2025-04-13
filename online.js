 // ✅ 1. FIX: Make sure we import and initialize Supabase correctly
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(
  'https://awovrjztjazkbsurzsoq.supabase.co',
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3b3Zyanp0amF6a2JzdXJ6c29xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0ODkwMzgsImV4cCI6MjA2MDA2NTAzOH0.APhIBsCiR-Y6WdHy7tcTZyadVunBlXOyp3N5ZKmOLFk"
);

// ✅ 2. Redirect from root
if (window.location.pathname === "/" || window.location.pathname.endsWith("/index.html")) {
  window.location.href = "index.html";
}

// ✅ 3. Wait for DOM to load before accessing elements
document.addEventListener("DOMContentLoaded", () => {
  const regForm = document.getElementById("registrationForm");
  const container = document.querySelector(".container");
  const collectDataSection = document.querySelector(".collect-data");
  const roomInput = document.getElementById("room-number");
  const emailInput = document.getElementById("email");
  const firstPassword = document.getElementById("password11");
  const secondPassword = document.getElementById("password22");
  const response = document.getElementById("response");
  const proceed = document.getElementById("proceed");

  if (!regForm) return;

  regForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (firstPassword.value !== secondPassword.value) {
      response.style.display = "block";
      response.textContent = "Passwords do not match! Try again.";
      return;
    }

    // Add user to Supabase
    const { data, error } = await supabase.from("users").insert([
      {
        email: emailInput.value,
        room: roomInput.value
      }
    ]);

    if (error) {
      response.style.display = "block";
      response.textContent = "Error saving user: " + error.message;
      return;
    }

    response.style.display = "none";
    container.style.display = "none";
    collectDataSection.style.display = "block";
  });

  const communication = document.getElementById("sendMessage");
  const messageInput = document.getElementById("messageInput");

  if (communication) {
    communication.addEventListener("click", () => {
      const message = messageInput.value.trim();
      if (message === "" || message.toLowerCase() === "hello landlord") {
        alert("Please insert a meaningful message");
      } else {
        alert("Message sent successfully");
      }
    });
  }

  const selectDropDown = document.getElementById("issue");
  const submit = document.getElementById("submit-button");
  const issuon = document.getElementById("user-data");
  let selectedOption = "";

  if (selectDropDown) {
    selectDropDown.addEventListener("change", () => {
      issuon.style.display = "block";
      submit.style.display = "block";
      selectedOption = selectDropDown.value;
    });
  }

  if (submit) {
    submit.addEventListener("click", () => {
      alert("Report on " + selectedOption + " submitted successfully");
      issuon.reset();
    });
  }

  const pop = document.getElementById("popup");
  const buttonStatement = document.getElementById("statement");
  const removeStatement = document.getElementById("cancel");

  if (pop && buttonStatement && removeStatement) {
    buttonStatement.addEventListener("click", () => {
      pop.style.display = "block";
    });

    removeStatement.addEventListener("click", () => {
      pop.style.display = "none";
    });
  }
});

window.onload = () => {
  const hash = window.location.hash;
  if (hash === "#dash-cntenot") {
    document.getElementById("dash-cntenot").style.display = "block";
    document.querySelector(".container").style.display = "none";
  } else {
    document.getElementById("dash-cntenot").style.display = "none";
    document.querySelector(".container").style.display = "block";
  }
};

// Username and Password for prototype
const user = "admin";
const pass = "1234";

const username = document.getElementById("username");
const password = document.getElementById("password");
const alertText = document.getElementById("alert-text");
const button = document.getElementById("submit-btn");

username.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    password.focus();
  }
});

password.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    button.click();
  }
});

button.addEventListener("click", () => {
  const userValue = username.value.trim();
  const passValue = password.value.trim();

  if (!userValue && !passValue) {
    alertText.textContent = "Hmm… Something’s missing here.";
  } else if (!userValue) {
    alertText.textContent = "Oops.. Sorry, Username can't be empty.";
  } else if (!passValue) {
    alertText.textContent = "Oops.. Don't forget your Password.";
  } else if (userValue === user && passValue === pass) {
    alertText.textContent = "";
    window.location.href = "dashboard.html";
  } else {
    alertText.textContent = "Wrong Username or Password !!";
  }
});

// Show password Function
const showPassword = document.getElementById("showPassword");

showPassword.addEventListener("change", () => {
  password.type = showPassword.checked ? "text" : "password";
});

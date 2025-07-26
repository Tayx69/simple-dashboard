const navLinks = document.querySelectorAll(".sidebar li");
const navInfo = document.querySelector(".sidebar");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (link.id !== "logoutBtn") {
      navInfo.classList.add("active");
      console.log("cihuy");
    }
  });
});

const logout = document.getElementById("logoutBtn");
const logoutWarn = document.getElementById("warnBox");
const cancelButton = document.getElementById("cancelButton");
const logoutButtton = document.getElementById("logoutButton");

logout.addEventListener("click", () => {
  logoutWarn.classList.add("show");
});

cancelButton.addEventListener("click", () => {
  logoutWarn.classList.remove("show");
});

logoutButtton.addEventListener("click", () => {
  window.location.href = "login.html";
});

const btn = document.querySelector("button");
const inputField = document.getElementById("input");
const copyButton = document.querySelector("i");
const notification = document.querySelector(".alert-container");
const passwordBank =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@£$%^&*()-";
let password = "";

btn.addEventListener("click", () => {
  generatePassword(passwordBank);
  inputField.value = password;
  notification.classList.remove("show");
});

copyButton.addEventListener("click", () => {
  copyPassword(password);
  if (password != "") {
    notificationShow(password);
  }
});

const generatePassword = (chars) => {
  password = "";
  for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * chars.length - 1);
    password += passwordBank.charAt(randomNum);
  }
  console.log(password);
};

const copyPassword = () => {
  navigator.clipboard.writeText(password);
};

const notificationShow = (pass) => {
  notification.classList.add("show");
  notification.innerHTML = `Copied to clipboard: ${pass}`;
};

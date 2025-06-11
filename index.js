const passwordField = document.getElementById("password")
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', ',', '.', '<', '>', '?', '/', '\\', '|', '~'];

const Allchars = upperCase + lowerCase + number + specialChars.join("");

function generatePass(){

let password = "";

password += upperCase[Math.floor(Math.random() * upperCase.length)]

password += lowerCase[Math.floor(Math.random() * lowerCase.length)]

password += number[Math.floor(Math.random() * number.length)]

password += specialChars[Math.floor(Math.random() * specialChars.length)]

while(length > password.length){
    password += Allchars[Math.floor(Math.random() *Allchars.length)];
}
passwordField.value = password;
}

function copyPass() {
  navigator.clipboard.writeText(passwordField.value)
    .then(() => {
      const popup = document.getElementById("copy-popup");
      popup.classList.add("show");
      setTimeout(() => {
        popup.classList.remove("show");
      }, 2000);
    })
    .catch(err => {
      console.error("Failed to copy:", err);
    });
}

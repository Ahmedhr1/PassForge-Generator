const passwordBox = document.getElementbyId("password")
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', ',', '.', '<', '>', '?', '/', '\\', '|', '~'];

function generatepass(){

  

let password = "";

password += upperCase[Math.floor(Math.random() * upperCase.length)]

password += lowerCase[Math.floor(Math.random() * lowerCase.length)]

password += numbe[Math.floor(Math.random() * number.length)]

password += Symbol[Math.floor(Math.random() * Symbol.length)]

  

}
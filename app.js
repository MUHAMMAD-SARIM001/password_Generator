
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+{}:\"<>?[];',./`~";

function generatePass() {
  
    const length = document.getElementById("length").value;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
        alert("Please select at least one character type!");
        return;
    }

    let characterSet = "";
    if (includeUppercase) characterSet += uppercaseLetters;
    if (includeLowercase) characterSet += lowercaseLetters;
    if (includeNumbers) characterSet += numbers;
    if (includeSymbols) characterSet += symbols;

 
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

   
    document.getElementById("password").value = password;
}
document.getElementById("generate-btn").addEventListener("click", generatePass);

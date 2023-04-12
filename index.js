const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassword = document.getElementById("first-password")
let secondPassword = document.getElementById("second-password")

let clicked = false 

function getPasswords(){
    let passwordLength = document.getElementById("password-length").value
    if (clicked === false && passwordLength > 7 && passwordLength < 17){
     for (let i = 0; i < passwordLength; i++) {
        let characterChoice = (Math.floor(Math.random() * characters.length))
        let password = characters[characterChoice]
        firstPassword.textContent += password
    }
    for (let i = 0; i < passwordLength; i++) {
        let characterChoice = (Math.floor(Math.random() * characters.length))
        let password = characters[characterChoice]
        secondPassword.textContent += password
    }
    } else if (clicked === false && passwordLength < 8 || passwordLength > 16) {
        alert("Password must be 8-16 characters long!")
    }
    clicked = true
}

function clearForm(){
    firstPassword.textContent = ""
    secondPassword.textContent = ""
    clicked = false
}

function copyFirstPassword(){
    let copied = document.getElementById("first-password").textContent
    navigator.clipboard.writeText(copied)
    alert("Copied: " + copied + " to clipboard.")
}

function copySecondPassword(){
    let copied = document.getElementById("second-password").textContent
    navigator.clipboard.writeText(copied)
    alert("Copied: " + copied + " to clipboard.")
}
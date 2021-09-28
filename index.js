let getUser = prompt("Username:\nHint: It's bouchard");

let user = '';

if(getUser == "bouchard") {
    user = "Dr. Bouchard";
}
else if(getUser == "tgsmith") {
    user = "Gage";
}
else {
    let choice = Number(prompt("Incorrect Username\n1 or 2?"));
    if(choice == 1) {
        window.location.replace("https://dood.al/pinktrombone/");
    }
    else if(choice == 2) {
        window.location.replace("https://www.adultswim.com/etcetera/elastic-man/app.html");
    }
}

let showingUser = document.getElementById("user");
let button = document.getElementById("button");
let getFib = document.getElementById("changer");
let textBox = document.getElementById("grabber");
let hiddenMessage = document.getElementById("for-bouch");

if(user == "Dr. Bouchard") {
    showingUser.style.color = "chartreuse";
    button.style.color = "chartreuse";
    hiddenMessage.innerHTML = "I made this chartreuse just for your 'profile'"
}

showingUser.innerHTML = "Welcome, " + user;
getFib.innerHTML = "What is it that I will do?";

function changeName()
{
    let change = prompt("See what it can do:");
    getFib.innerHTML = change;
}

button.addEventListener("click", changeName);

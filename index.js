// let getUser = prompt("Username:");

// Delete below line after done testing
let getUser = "tgsmith";

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
let button = document.getElementsByTagName("button");
let getFib = document.getElementById("changer");

if(user == "Dr. Bouchard") {
    showingUser.style.color = "chartreuse";
    button.style.color = "chartreuse";
}

showingUser.innerHTML = "Welcome, " + user;
getFib.innerHTML = "What is it that I will do?";

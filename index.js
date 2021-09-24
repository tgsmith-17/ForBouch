let getUser = prompt("Username:");

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

if(user == "Dr. Bouchard") {
showingUser.style.color = "chartreuse";
}

showingUser.innerHTML = "Welcome, " + user;

let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");

function jokeGet() {
    let option = {
        method: "GET"
    };
    let url = "https://apis.ccbp.in/jokes/random";
    spinnerEl.classList.remove("d-none");
    fetch(url, option)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");
            jokeTextEl.textContent = JSON.stringify(jsonData);
        });
}
jokeBtnEl.addEventListener("click", jokeGet);
let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");


let option = {
    method: "GET"
};

function jokeGet() {
    let url = "https://apis.ccbp.in/jokes/random";
    spinnerEl.classList.remove("d-none");
    jokeTextEl.classList.add("d-none");
    fetch(url, option)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let randomJoke = jsonData.value;

            spinnerEl.classList.add("d-none");
            jokeTextEl.classList.remove("d-none");
            jokeTextEl.textContent = randomJoke;
        });
}
jokeBtnEl.addEventListener("click", jokeGet);
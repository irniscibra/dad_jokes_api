const jokeEl = document.getElementById("joke")
const jokeBtn = document.getElementById("joke_btn")

jokeBtn.addEventListener("click",generateJoke)

generateJoke()

function generateJoke(){
    fetch("https://icanhazdadjoke.com",{
        headers:{"Accept":"application/json"}
    }).then(response=>response.json()).then(data=>
        jokeEl.innerHTML = data.joke
    )
}


const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";

const options = {
method: "GET",
header: {
"X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
    joke.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(appiURL, options);
    const data = await response.json();
    
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    
    btnEl.disabled = false;
    btn.innerText = "Tell me a joke";
    
    jokeEl.innerText = data[0].joke;
} catch (error) {
    jokeEl.innerText = "An error happend, try again later";
    btnEl.innerText = "Tell me a joke";
    console.log(error);
    }
}
btnEl.addEventListener("click", getJoke);
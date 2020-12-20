const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();


// COM async/await
async function generateJoke() {
  const config = {
    headers: {
      'Accept': 'application/json'
    }
  }
  
  const res = await fetch(`https://icanhazdadjoke.com`, config);
  const data = await res.json();
  
  jokeEl.innerHTML = data.joke;
}


/*
// COM .then
function generateJoke() {
  const config = {
    headers: {
      'Accept': 'application/json'
    }
  }
  
  fetch(`https://icanhazdadjoke.com`, config)
    .then(res => res.json())
    .then(data => {
    jokeEl.innerHTML = data.joke;
  });
}*/


// JS Promise: // https://www.w3schools.com/js/js_promise.asp

// async/await: // https://www.w3schools.com/js/js_async.asp

// Fetch: https://www.w3schools.com/js/js_api_fetch.asp
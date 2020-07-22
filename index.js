const textDiv = document.querySelector(".text");
const searchInput = document.querySelector(".input__value");
const genBtn = document.querySelector(".generate");

let searchValue = 5;
const chuckApi = `http://api.icndb.com/jokes/random/${searchValue}/?escape=javascript`;

// Event Listener
searchInput.addEventListener("input", (e) => {
  searchValue = e.target.value;
});
genBtn.addEventListener("click", (e) => {
  e.preventDefault();

  chuckMe(chuckApi);
});

async function chuckMe(url) {
  const chuckData = await fetch(url, {
    //method tell us what we want to do with the data
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const data = await chuckData.json();
  generateJokes(data);
}

function generateJokes(data) {
  data.value.forEach((joke) => {
    // console.log(joke.joke);

    const jokes = document.createElement("p");
    jokes.innerText = `${joke.joke}`;
    textDiv.appendChild(jokes);
  });
}

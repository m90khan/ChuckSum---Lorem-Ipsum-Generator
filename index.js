const chuckApi1 = "http://api.icndb.com/jokes/random";

const textDiv = document.querySelector(".text");
const searchInput = document.querySelector(".input__value");
const genBtn = document.querySelector(".generate");

let searchValue = 5;

// Event Listener
searchInput.addEventListener("input", (e) => {
  searchValue = e.target.value;
});
genBtn.addEventListener("click", (e) => {
  e.preventDefault();

  chuckMe(searchValue);
});

async function chuckMe(query) {
  const chuckData = await fetch(`http://api.icndb.com/jokes/random/${query}`, {
    //method tell us what we want to do with the data
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const data = await chuckData.json();
  console.log(data);
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

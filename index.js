const charactersList = document.querySelector("#characters");
const characterName = document.querySelector("#character-name");
const characterGender = document.querySelector("#character-gender");
const characterHeight = document.querySelector("#character-height");

fetch("https://swapi.dev/api/people")
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((character) => {
      const li = document.createElement("li");
      li.textContent = character.name;
      li.addEventListener("click", () => {
        characterName.textContent = character.name;
        characterGender.textContent = `Gender: ${character.gender}`;
        characterHeight.textContent = `Height: ${character.height}`;
      });
      charactersList.appendChild(li);
    });
  });

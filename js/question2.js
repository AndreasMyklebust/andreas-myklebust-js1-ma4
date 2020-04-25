url = "https://api.rawg.io/api/games";

async function fetchGames() {
   try {
      const response = await fetch(url);
      const games = await response.json();
      displayGames(games);
   } catch (error) {
      console.log(error);
   }
}

fetchGames();

function displayGames(games) {
   console.log(games);

   let html = "";

   for (let i = 0; i < games.results.length; i++) {
      html += `<div class="game">
                <h2>${games.results[i].name}</h2>
                <img src=${games.results[i].background_image} alt="${games.results[i].name}" />
             </div>`;
   }
   const gamesContainer = document.querySelector(".results");

   gamesContainer.innerHTML = html;
}

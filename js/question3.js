url = "https://api.rawg.io/api/games/4200";

async function fetchGame() {
   try {
      const response = await fetch(url);
      const game = await response.json();
      displayGame(game);
   } catch (error) {
      console.log(error);
   }
}

function displayGame(game) {
   console.log(game);

   const gameHeader = document.querySelector("h1");
   gameHeader.innerHTML = game.name;

   const gameImage = document.querySelector(".image");
   gameImage.style.backgroundImage = `url(${game.background_image_additional})`;

   const gameDescription = document.querySelector(".description");
   gameDescription.innerHTML = game.description;
}

fetchGame();

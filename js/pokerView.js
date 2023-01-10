class PokerView {
	btnAddPlayer = document.getElementById("btnAddPlayer");
	inputAddPlayer = document.getElementById("inputAddPlayer");
	outputPokerGame = document.getElementById("outputPokerGame");
	outputNodes = document.getElementById("outputPokerGame").childNodes;

	renderGame(playersArray) {
		const markup = playersArray
			.map((player) => `<p>${player.name}</p>`)
			.join("");
		this.outputPokerGame.innerHTML = markup;
	}

	addHandlerRender(handler) {
		btnAddPlayer.addEventListener("click", function (e) {
			e.preventDefault();

			const playerName = inputAddPlayer.value;
			if (!playerName) return;

			handler(playerName);

			inputAddPlayer.value = "";

			console.log(`New player \"${playerName}\" added!`);
		});
	}
}

export default new PokerView();

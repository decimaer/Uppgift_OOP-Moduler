class PokerView {
	inputAddPlayer = document.getElementById("inputAddPlayer");
	btnAddPlayer = document.getElementById("btnAddPlayer");
	btnStartGame = document.getElementById("btnStartGame");
	btnDiscardCards = document.getElementById("btnDiscardCards");
	outputPokerGame = document.getElementById("outputPokerGame");
	outputNodes = document.getElementById("outputPokerGame").childNodes;

	/**
	 * Renders the game area in the DOM
	 * @param {Array} playersArray the array of player objects from the game object
	 */

	renderGame(playersArray) {
		let markup = "";

		playersArray.forEach((player) => {
			markup += `
				<div class="playerRow" id="${player.name}">
				<span>${player.name.padEnd(15)}</span>
				<span class="cardHand">${
					player.hand
						? player.hand
								.map((card) => {
									const className =
										card.suit === "♦" || card.suit === "♥"
											? "red"
											: "black";
									return `<span class="card ${className}">${card.cardIcon}</span>`;
								})
								.join("")
								.padEnd(10)
						: "🂠🂠🂠🂠🂠"
				}</span>
				</div>
			`;
		});
		this.outputPokerGame.innerHTML = markup;

		/* 		const markup = playersArray
			.map((player) => `<p>${player.name}</p>`)
			.join("");
		this.outputPokerGame.innerHTML = markup;
	 */
	}
	addHandlerRender(handler) {
		btnAddPlayer.addEventListener("click", function (e) {
			e.preventDefault();

			const playerName = inputAddPlayer.value;
			if (!playerName) return;

			const validatedName = playerName.trim().slice(0, 10);

			handler(validatedName);

			inputAddPlayer.value = "";

			console.log(`New player \"${validatedName}\" added!`);
		});
	}

	addHandlerStartGame(handler) {
		this.btnStartGame.addEventListener("click", handler);
	}

	addHandlerSelectCards(handler) {
		this.outputNodes.forEach((node) => {
			if (!node.classList?.contains("playerRow")) return;

			node.addEventListener("click", function (e) {
				e.target.classList.toggle("selectedCard");
			});
		});
	}

	handlerDiscardCards(handler, _) {
		const cardHands = this.outputPokerGame.querySelectorAll(".selectedCard");

		handler(cardHands);
	}

	addHandlerDiscardCards(handler) {
		this.btnDiscardCards.addEventListener(
			"click",
			this.handlerDiscardCards.bind(this, handler)
		);
	}
}

export default new PokerView();

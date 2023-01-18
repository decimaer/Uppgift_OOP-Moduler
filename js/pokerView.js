class PokerView {
	inputAddPlayer = document.getElementById("inputAddPlayer");
	btnAddPlayer = document.getElementById("btnAddPlayer");
	btnStartGame = document.getElementById("btnStartGame");
	btnDiscardCards = document.getElementById("btnDiscardCards");
	btnNewRound = document.getElementById("btnNewRound");
	outputPokerGame = document.getElementById("outputPokerGame");
	outputNodes = document.getElementById("outputPokerGame").childNodes;

	displayWin = false;

	constructor() {
		// Reinitialize buttons on startup. This is a bugfix when browser remembers attribute of buttons on page reload
		this.removeDisableButton(this.btnStartGame);
		this.removeDisableButton(this.btnAddPlayer);
		this.setDisableButton(this.btnDiscardCards);
		this.setDisableButton(this.btnNewRound);
	}

	/**
	 * Renders the game in the DOM
	 * @param {Array} playersArray the array of player objects from the game object
	 */
	#renderCardHand(player) {
		return player.hand
			? player.hand
					.map((card) => {
						const className =
							card.suit === "♦" || card.suit === "♥" ? "red" : "black";
						return `<span class="card ${className}">${card.cardIcon}</span>`;
					})
					.join("")
					.padEnd(10)
			: "🂠🂠🂠🂠🂠";
	}

	#renderPoints(player) {
		if (this.displayWin)
			return `<span>${
				player.totalPoints.at(-1) === 1 ? "- WINNER of round!" : ""
			}</span>`;
	}

	#renderRankAndPoints(player) {
		return `
		<span class="playerRoundRank">   Ranking in round: ${
			player.roundRank.handName
		} of value ${player.roundRank.handValue}</span>
		<span class="playerTotalPoints">   Total Points: ${
			player.totalPoints.join(" ") ?? ""
		}</span>
		${this.#renderPoints(player) ?? ""}
		`;
	}

	renderGame(playersArray) {
		let markup = "";

		playersArray.forEach((player) => {
			markup += `
				<div class="playerRow" id="${player.name}">
				<span>${player.name.padEnd(15)}</span>
				<span class="cardHand">${this.#renderCardHand(player)}</span>
				${player.roundRank ? this.#renderRankAndPoints(player) : ""}
				</div>
			`;
		});
		this.outputPokerGame.innerHTML = markup;
	}

	removeDisableButton(button) {
		button.removeAttribute("disabled");
	}

	setDisableButton(button) {
		button.setAttribute("disabled", "");
	}

	addHandlerRender(handler) {
		btnAddPlayer.addEventListener("click", function (e) {
			e.preventDefault();

			const playerName = inputAddPlayer.value;
			if (!playerName) return;

			const validatedName = playerName.trim().slice(0, 10);

			handler(validatedName);

			inputAddPlayer.value = "";
		});
	}

	#startGame(handler) {
		handler();

		this.setDisableButton(this.btnStartGame);
		this.removeDisableButton(this.btnDiscardCards);
		this.setDisableButton(this.btnAddPlayer);
	}

	addHandlerStartGame(handler) {
		this.btnStartGame.addEventListener(
			"click",
			this.#startGame.bind(this, handler)
		);
	}

	addHandlerSelectCards() {
		this.outputNodes.forEach((node) => {
			if (!node.classList?.contains("playerRow")) return;

			node.addEventListener("click", function (e) {
				e.target.classList.toggle("selectedCard");
			});
		});
	}

	#handlerDiscardCards(handler) {
		const cardHands = this.outputPokerGame.querySelectorAll(".selectedCard");

		handler(cardHands);

		this.setDisableButton(this.btnDiscardCards);
		this.removeDisableButton(this.btnNewRound);
	}

	addHandlerDiscardCards(handler) {
		this.btnDiscardCards.addEventListener(
			"click",
			this.#handlerDiscardCards.bind(this, handler)
		);
	}

	#handlerNewRound(handler) {
		// reset buttons
		this.removeDisableButton(this.btnDiscardCards);
		this.setDisableButton(this.btnNewRound);

		handler();
	}

	addHandlerNewRound(handler) {
		this.btnNewRound.addEventListener(
			"click",
			this.#handlerNewRound.bind(this, handler)
		);
	}
}

export default new PokerView();

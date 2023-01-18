import pokerView from "./pokerView.js";
import { game, Validation } from "./pokerModel.js";

const controlAddNewPlayer = function (playerName) {
	game.addPlayer(playerName);

	pokerView.renderGame(game.players);
};

const controlStartGame = function () {
	game.startGame();

	pokerView.renderGame(game.players);

	pokerView.addHandlerSelectCards();
};

const controlDiscardCards = function (cardHands) {
	const cardsToDiscard = {};

	cardHands.forEach((card) => {
		const playerName = card.closest(".playerRow").id;

		if (!cardsToDiscard[playerName]) {
			cardsToDiscard[playerName] = [];
		}

		cardsToDiscard[playerName].push(card.innerText);
	});

	//ta bort kort ur hand
	game.discardCards(cardsToDiscard);

	// store current rank of hands
	game.players = Validation.check(game.players);

	// determine winner of round
	Validation.win(game.players);
	pokerView.displayWin = true;

	// rerender game
	pokerView.renderGame(game.players);
};

const controlNewRound = function () {
	pokerView.displayWin = false;

	// start new game round
	controlStartGame();
};

pokerView.addHandlerRender(controlAddNewPlayer);
pokerView.addHandlerStartGame(controlStartGame);
pokerView.addHandlerDiscardCards(controlDiscardCards);
pokerView.addHandlerNewRound(controlNewRound);

// For dev purposes
const devInit = function () {
	controlAddNewPlayer("Slim");
	controlAddNewPlayer("Luke");
	controlAddNewPlayer("Fluke");
};
devInit();

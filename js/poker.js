import pokerView from "./pokerView.js";

class Deck {
	sortedDeck = [
		{ value: 2, suit: "♣", name: "2 of clubs", cardIcon: "🃒" },
		{ value: 3, suit: "♣", name: "3 of clubs", cardIcon: "🃓" },
		{ value: 4, suit: "♣", name: "4 of clubs", cardIcon: "🃔" },
		{ value: 5, suit: "♣", name: "5 of clubs", cardIcon: "🃕" },
		{ value: 6, suit: "♣", name: "6 of clubs", cardIcon: "🃖" },
		{ value: 7, suit: "♣", name: "7 of clubs", cardIcon: "🃗" },
		{ value: 8, suit: "♣", name: "8 of clubs", cardIcon: "🃘" },
		{ value: 9, suit: "♣", name: "9 of clubs", cardIcon: "🃙" },
		{ value: 10, suit: "♣", name: "10 of clubs", cardIcon: "🃚" },
		{ value: 11, suit: "♣", name: "Jack of clubs", cardIcon: "🃛" },
		{ value: 12, suit: "♣", name: "Queen of clubs", cardIcon: "🃝" },
		{ value: 13, suit: "♣", name: "King of clubs", cardIcon: "🃞" },
		{ value: 14, suit: "♣", name: "Ace of clubs", cardIcon: "🃑" },
		{ value: 2, suit: "♦", name: "2 of diamonds", cardIcon: "🃂" },
		{ value: 3, suit: "♦", name: "3 of diamonds", cardIcon: "🃃" },
		{ value: 4, suit: "♦", name: "4 of diamonds", cardIcon: "🃄" },
		{ value: 5, suit: "♦", name: "5 of diamonds", cardIcon: "🃅" },
		{ value: 6, suit: "♦", name: "6 of diamonds", cardIcon: "🃆" },
		{ value: 7, suit: "♦", name: "7 of diamonds", cardIcon: "🃇" },
		{ value: 8, suit: "♦", name: "8 of diamonds", cardIcon: "🃈" },
		{ value: 9, suit: "♦", name: "9 of diamonds", cardIcon: "🃉" },
		{ value: 10, suit: "♦", name: "10 of diamonds", cardIcon: "🃊" },
		{ value: 11, suit: "♦", name: "Jack of diamonds", cardIcon: "🃋" },
		{ value: 12, suit: "♦", name: "Queen of diamonds", cardIcon: "🃍" },
		{ value: 13, suit: "♦", name: "King of diamonds", cardIcon: "🃎" },
		{ value: 14, suit: "♦", name: "Ace of diamonds", cardIcon: "🃁" },
		{ value: 2, suit: "♥", name: "2 of hearts", cardIcon: "🂲" },
		{ value: 3, suit: "♥", name: "3 of hearts", cardIcon: "🂳" },
		{ value: 4, suit: "♥", name: "4 of hearts", cardIcon: "🂴" },
		{ value: 5, suit: "♥", name: "5 of hearts", cardIcon: "🂵" },
		{ value: 6, suit: "♥", name: "6 of hearts", cardIcon: "🂶" },
		{ value: 7, suit: "♥", name: "7 of hearts", cardIcon: "🂷" },
		{ value: 8, suit: "♥", name: "8 of hearts", cardIcon: "🂸" },
		{ value: 9, suit: "♥", name: "9 of hearts", cardIcon: "🂹" },
		{ value: 10, suit: "♥", name: "10 of hearts", cardIcon: "🂺" },
		{ value: 11, suit: "♥", name: "Jack of hearts", cardIcon: "🂻" },
		{ value: 12, suit: "♥", name: "Queen of hearts", cardIcon: "🂽" },
		{ value: 13, suit: "♥", name: "King of hearts", cardIcon: "🂾" },
		{ value: 14, suit: "♥", name: "Ace of hearts", cardIcon: "🂱" },
		{ value: 2, suit: "♠", name: "2 of spades", cardIcon: "🂢" },
		{ value: 3, suit: "♠", name: "3 of spades", cardIcon: "🂣" },
		{ value: 4, suit: "♠", name: "4 of spades", cardIcon: "🂤" },
		{ value: 5, suit: "♠", name: "5 of spades", cardIcon: "🂥" },
		{ value: 6, suit: "♠", name: "6 of spades", cardIcon: "🂦" },
		{ value: 7, suit: "♠", name: "7 of spades", cardIcon: "🂧" },
		{ value: 8, suit: "♠", name: "8 of spades", cardIcon: "🂨" },
		{ value: 9, suit: "♠", name: "9 of spades", cardIcon: "🂩" },
		{ value: 10, suit: "♠", name: "10 of spades", cardIcon: "🂪" },
		{ value: 11, suit: "♠", name: "Jack of spades", cardIcon: "🂫" },
		{ value: 12, suit: "♠", name: "Queen of spades", cardIcon: "🂭" },
		{ value: 13, suit: "♠", name: "King of spades", cardIcon: "🂮" },
		{ value: 14, suit: "♠", name: "Ace of spades", cardIcon: "🂡" },
	];

	cardBackside = "🂠";

	constructor() {
		this.shuffledDeck = this.shuffle(this.sortedDeck);
	}

	shuffle = function (deck) {
		return [...deck].sort(() => Math.random() - 0.5);
	};
}

class Dealer extends Deck {
	constructor() {
		super();
	}

	dealCards = function (amount) {
		return this.shuffledDeck.splice(0, amount);
	};
}

class Player {
	hand;
	roundRank = { handName: "", handValue: 0, handRank: 0 };
	totalPoints = [];

	constructor(name) {
		this.name = name;
	}
}

class Validation {
	static rankOfPokerHands = [
		"three of a kind",
		"two pair",
		"one pair",
		"high card",
	];

	static sumOfCardValues = function (cards) {
		return cards.reduce((acc, { value: cur }) => acc + cur, 0);
	};

	static evaluateHand(hand) {
		let cardsToEvaluate = [];

		// Filter out the cards that have the same value
		hand.forEach((card, i, arr) => {
			const currentArray = [...arr];

			currentArray.splice(i, 1);

			cardsToEvaluate.push(
				...currentArray.filter((card2) => card2.value === card.value)
			);
		});
		console.log(cardsToEvaluate, cardsToEvaluate.length);
		if (cardsToEvaluate.length === 4)
			return {
				handName: "two pair",
				handValue: 200 + this.sumOfCardValues(cardsToEvaluate),
			};
		if (cardsToEvaluate.length === 3)
			return {
				handName: "three of a kind",
				handValue: 300 + this.sumOfCardValues(cardsToEvaluate),
			};
		if (cardsToEvaluate.length === 2)
			return {
				handName: "one pair",
				handValue: 100 + this.sumOfCardValues(cardsToEvaluate),
			};
		else return undefined;
	}

	static highCard(hand) {
		return [...hand].sort((a, b) => b.value - a.value).at(0);
	}

	static check = function (players) {
		// check which is the highest hand, and return point
		const rankedPlayers = players.map((player) => {
			const evaluatedHand = this.evaluateHand(player.hand);

			if (evaluatedHand) {
				player.roundRank.handName = evaluatedHand.handName;
				player.roundRank.handValue = evaluatedHand.handValue;
				return player;
			} else {
				player.roundRank.handName = "high card";
				player.roundRank.handValue = this.highCard(player.hand).value;
				return player;
			}
		});
		console.log(rankedPlayers);
		// evaluate which player has the highest hand. If players have the same, check the hand's highest card and so on.

		// rankedPlayers.forEach((player, _, players) => {});

		// const sortedPlayers = [...rankedPlayers].sort((a, b) => {
		// 	if (a.roundRank === b.roundRank) {
		// 	}
		// });

		// return array of ranking of players hands.
		return rankedPlayers;
		/* 		if (!player) return;

		const rankingHands = player
			.map((player) => {
				return { name: player.name, points: this.sumOfRanks(player.hand) };
			})
			.sort((a, b) => b.points - a.points);

		return rankingHands; */
	};

	//return array of players with totalPoints array, add 1 for win or 0 for lose
	static win = function (players) {
		//set 0 to all players
		const playersWithPoints = [...players];
		playersWithPoints.forEach((player) => {
			player.totalPoints.push(0);
		});

		console.log(playersWithPoints);
		// check which rank is highest
		const sortedPlayers = [...playersWithPoints].sort((a, b) => {
			console.log(a.roundRank.handValue, b.roundRank.handValue);
			return b.roundRank.handValue - a.roundRank.handValue;
		});

		console.log(sortedPlayers);

		// if two or more ranks are equal, compare value
		// sortedPlayers =

		// Sort array to determine winner

		// if at least two top ranked players have the same rank, it's a tie, and noone wins
		if (
			sortedPlayers[0].roundRank.handValue ===
			sortedPlayers[1].roundRank.handValue
		) {
			return;
		} else {
			// set winner
			const index = playersWithPoints.findIndex(
				(player) => player.name === sortedPlayers[0].name
			);
			const index2 = playersWithPoints[index].totalPoints.length - 1;
			playersWithPoints[index].totalPoints[index2] = 1;
			console.log(index);
			console.log(playersWithPoints[index].name);
		}
	};
}

class Game {
	players = [];

	dealer = new Dealer();

	startGame = function () {
		if (this.players.length < 2) return;

		//todo: check if there are cards left in deck

		// deal cards
		this.players.forEach(
			(player) => (player.hand = this.dealer.dealCards(5))
		);
		/* 		this.players.forEach((player) =>
			console.log(`${player.hand.map((card) => card.cardIcon).join("")}`)
		);
 */
		// store current rank of hands
		this.players = Validation.check(this.players);
		/* 		console.log(
			`Winner is ${winner[0].name} with ${winner[0].points} points`
		); */
	};

	addPlayer = function (playerName) {
		this.players.push(new Player(playerName));
	};

	discardCards(cards) {
		Object.entries(cards).forEach(([player, cards]) => {
			console.log(player, cards);
			cards.forEach((card) => {
				const playerIndex = this.players.findIndex(
					(item) => item.name === player
				);
				const cardIndex = this.players[playerIndex].hand.findIndex(
					(item) => item.cardIcon === card
				);
				// remove card
				this.players[playerIndex].hand.splice(cardIndex, 1);

				// deal new card
				this.players[playerIndex].hand.push(...this.dealer.dealCards(1));
			});
		});
	}
}

const game = new Game();

const controlAddNewPlayer = function (playerName) {
	game.addPlayer(playerName);

	pokerView.renderGame(game.players);
};

const controlStartGame = function () {
	game.startGame();
	console.log(game.players);

	pokerView.renderGame(game.players);

	pokerView.addHandlerSelectCards(controlSelectCards);
};

const controlSelectCards = function () {};

const controlDiscardCards = function (cardHands) {
	const cardsToDiscard = {};

	cardHands.forEach((card) => {
		const playerName = card.closest(".playerRow").id;

		if (!cardsToDiscard[playerName]) {
			cardsToDiscard[playerName] = [];
		}

		cardsToDiscard[playerName].push(card.innerText);
	});
	console.log(cardsToDiscard);
	//ta bort kort ur hand
	game.discardCards(cardsToDiscard);

	// store current rank of hands
	game.players = Validation.check(game.players);

	// determine winner of round
	Validation.win(game.players);

	// rerender game
	pokerView.renderGame(game.players);
};

const controlNewRound = function () {
	console.log("new round");
};

pokerView.addHandlerRender(controlAddNewPlayer);
pokerView.addHandlerStartGame(controlStartGame);
pokerView.addHandlerDiscardCards(controlDiscardCards);
pokerView.addHandlerNewRound(controlNewRound);

// game.addPlayer("Slim");
// game.addPlayer("Luke");

// game.startGame();

console.log(game.players);
/* let slim = dealer.dealCards(5)
let luke = dealer.dealCards(5)
console.log(Validation.check([slim, luke])) */

// For dev purposes
const devInit = function () {
	controlAddNewPlayer("Slim");
	controlAddNewPlayer("Luke");
	controlAddNewPlayer("Fluke");
	controlAddNewPlayer("Duke");
	controlAddNewPlayer("Tuke");
};
devInit();

console.log(pokerView.outputNodes);

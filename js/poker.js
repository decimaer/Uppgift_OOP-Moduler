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

class Player {
	hand;
	constructor(name) {
		this.name = name;
	}
}

class Dealer {
	pokerDeck = new Deck();

	constructor() {}

	dealCards = function (amount) {
		return this.pokerDeck.shuffledDeck.splice(0, amount);
	};
}

class Validation {
	static sumOfRanks = function (hand) {
		return hand.reduce((acc, { value: cur }) => acc + cur, 0);
	};

	static check = function (players) {
		if (!players) return;

		const rankingHands = players
			.map((player) => {
				return { name: player.name, points: this.sumOfRanks(player.hand) };
			})
			.sort((a, b) => b.points - a.points);

		return rankingHands;
	};
}

class Game {
	players = [];

	dealer = new Dealer();

	constructor() {}

	startGame = function () {
		if (this.players.length < 2) return;

		//todo: check if there are cards left
		this.players.forEach(
			(player) => (player.hand = this.dealer.dealCards(5))
		);
		this.players.forEach((player) =>
			console.log(`${player.hand.map((card) => card.cardIcon).join("")}`)
		);

		const winner = Validation.check(this.players);
		console.log(
			`Winner is ${winner[0].name} with ${winner[0].points} points`
		);
	};

	addPlayer = function (playerName) {
		this.players.push(new Player(playerName));
	};
}

const game = new Game();

const controlAddNewPlayer = function (playerName) {
	game.addPlayer(playerName);

	pokerView.renderGame(game.players);
};

const controlStartGame = function () {
	game.startGame();

	pokerView.renderGame(game.players);
};

pokerView.addHandlerRender(controlAddNewPlayer);
pokerView.addHandlerStartGame(controlStartGame);

// game.addPlayer("Slim");
// game.addPlayer("Luke");

// game.startGame();

console.log(game.players);
/* let slim = dealer.dealCards(5)
let luke = dealer.dealCards(5)
console.log(Validation.check([slim, luke])) */

const devInit = function () {
	controlAddNewPlayer("Slim");
	controlAddNewPlayer("Luke");
};
devInit();

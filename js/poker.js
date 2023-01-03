'use strict'




class Deck {
    sortedDeck = [
        { value: 2, suit: '♣', name: '2 of clubs' },
        { value: 3, suit: '♣', name: '3 of clubs' },
        { value: 4, suit: '♣', name: '4 of clubs' },
        { value: 5, suit: '♣', name: '5 of clubs' },
        { value: 6, suit: '♣', name: '6 of clubs' },
        { value: 7, suit: '♣', name: '7 of clubs' },
        { value: 8, suit: '♣', name: '8 of clubs' },
        { value: 9, suit: '♣', name: '9 of clubs' },
        { value: 10, suit: '♣', name: '10 of clubs' },
        { value: 11, suit: '♣', name: 'Jack of clubs' },
        { value: 12, suit: '♣', name: 'Queen of clubs' },
        { value: 13, suit: '♣', name: 'King of clubs' },
        { value: 14, suit: '♣', name: 'Ace of clubs' },
        { value: 2, suit: '♦', name: '2 of diamonds' },
        { value: 3, suit: '♦', name: '3 of diamonds' },
        { value: 4, suit: '♦', name: '4 of diamonds' },
        { value: 5, suit: '♦', name: '5 of diamonds' },
        { value: 6, suit: '♦', name: '6 of diamonds' },
        { value: 7, suit: '♦', name: '7 of diamonds' },
        { value: 8, suit: '♦', name: '8 of diamonds' },
        { value: 9, suit: '♦', name: '9 of diamonds' },
        { value: 10, suit: '♦', name: '10 of diamonds' },
        { value: 11, suit: '♦', name: 'Jack of diamonds' },
        { value: 12, suit: '♦', name: 'Queen of diamonds' },
        { value: 13, suit: '♦', name: 'King of diamonds' },
        { value: 14, suit: '♦', name: 'Ace of diamonds' },
        { value: 2, suit: '♥', name: '2 of hearts' },
        { value: 3, suit: '♥', name: '3 of hearts' },
        { value: 4, suit: '♥', name: '4 of hearts' },
        { value: 5, suit: '♥', name: '5 of hearts' },
        { value: 6, suit: '♥', name: '6 of hearts' },
        { value: 7, suit: '♥', name: '7 of hearts' },
        { value: 8, suit: '♥', name: '8 of hearts' },
        { value: 9, suit: '♥', name: '9 of hearts' },
        { value: 10, suit: '♥', name: '10 of hearts' },
        { value: 11, suit: '♥', name: 'Jack of hearts' },
        { value: 12, suit: '♥', name: 'Queen of hearts' },
        { value: 13, suit: '♥', name: 'King of hearts' },
        { value: 14, suit: '♥', name: 'Ace of hearts' },
        { value: 2, suit: '♠', name: '2 of spades' },
        { value: 3, suit: '♠', name: '3 of spades' },
        { value: 4, suit: '♠', name: '4 of spades' },
        { value: 5, suit: '♠', name: '5 of spades' },
        { value: 6, suit: '♠', name: '6 of spades' },
        { value: 7, suit: '♠', name: '7 of spades' },
        { value: 8, suit: '♠', name: '8 of spades' },
        { value: 9, suit: '♠', name: '9 of spades' },
        { value: 10, suit: '♠', name: '10 of spades' },
        { value: 11, suit: '♠', name: 'Jack of spades' },
        { value: 12, suit: '♠', name: 'Queen of spades' },
        { value: 13, suit: '♠', name: 'King of spades' },
        { value: 14, suit: '♠', name: 'Ace of spades' },
    ];
    shuffledDeck

    constructor() {
        this.shuffledDeck = this.shuffle(this.sortedDeck)
    }

    shuffle = function(deck) {
        return [...deck].sort(() => Math.random() - 0.5);
    }
}

const pokerDeck = new Deck;

console.log('sorted', pokerDeck.sortedDeck)
console.log('shuffled', pokerDeck.shuffledDeck)

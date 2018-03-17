/*Deck of Cards
Create a Deck class. A deck should have the following functionality:

The Deck should contain the 52 standard cards
The Deck should be able to shuffle
The Deck should be able to reset
The Deck should be able to deal a random card
Deal should return the card that was deal and remove it from the deck

Now create a Player class. A Player should have the following functionality:

The Player should have a name
The Player should have a hand
The Player should be able to take a card (use the deck.deal method)
The Player should be able to discard a card


Optional:
Create a blackjack game with your deck of cards!
A deck of card image set can be found here
http://s3.amazonaws.com/General_V88/boomyeah/company_209/chapter_3303/handouts/chapter3303_4963_cards-png.zip

Or Unicode them Unicode for card images!
http://s3.amazonaws.com/General_V88/boomyeah/company_209/chapter_3303/handouts/chapter3303_4963_cards-png.zip


*/
class Deck{
    constructor(){
      this.carts = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 
                    11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
                    11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
                    11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
    }
    
    shuffle(){
        for (let i = this.carts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.carts[i], this.carts[j]] = [this.carts[j], this.carts[i]];
        }
        return this;
    }

    reset(){
        this.carts = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 
            11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
            11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
            11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
        return this;
    }

    deal(){
        let cart = this.carts[Math.floor(Math.random()*this.carts.length)];
        this.carts.pop(cart);
        return cart;
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }

    take_cart(cart){
        this.hand.push(cart)
    }

    discard(){
        this.hand = []
        return this;
    }
}



var deck = new Deck();
var player1 = new Player("Anton");

deck.shuffle();
player1.take_cart(deck.deal());

console.log(deck.carts);
console.log(deck.carts.length);
console.log(player1.hand);

player1.take_cart(deck.deal());

console.log(deck.carts);
console.log(deck.carts.length);
console.log(player1.hand);
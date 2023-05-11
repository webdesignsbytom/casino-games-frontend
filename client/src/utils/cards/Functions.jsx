export function createDeck() {
  const newDeck = [];

  for (let i = 0; i < suitArray.length; i++) {
    const suit = suitArray[i];

    for (let j = 0; j < cardArray.length; j++) {
      const jname = cardArray[j].name;
      const jvalue = cardArray[j].value;
      const jicon = cardArray[j].icon;

      const card = new Card(jname, jvalue, suit, jicon);
      newDeck.push(card);
    }
  }
  return (this.deck = newDeck);
}

export function shuffleDeck() {
  let shuffledDeck = this.deck;
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = shuffledDeck[i];
    shuffledDeck[i] = shuffledDeck[j];
    shuffledDeck[j] = temp;
  }
  this.deck = shuffledDeck;
}

export function dealHand() {
  // players each get one card
  this.playerArray.forEach((player) => {
    let newPlayerHand = [];

    for (let i = 0; i < this.holeCardNum; i++) {
      let cards = this.deck.splice(0, 1);
      let card = cards[0];
      newPlayerHand.push(card);
    }

    const newHand = new Hand(this.handId, player.username, newPlayerHand);
    this.handId++;
    player.hand = newHand;
  });
}

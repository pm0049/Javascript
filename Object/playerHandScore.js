/*
The function playerHandScore that takes in a string of face cards (Jack, Queen, and King only) and returns the total score of the players hand.

The cards are represented by the first letter in the name of the card:

A "K" is 4 points
A "Q" is 3 points
A "J" is 2 points
Example Usage:

console.log( playerHandScore("K") ); // 4
console.log( playerHandScore("KJ") ); // 6
console.log( playerHandScore("KQQ") ); // 10

*/
function playerHandScore(cards) {
  // Create an object to store the points corresponding to each card
  const cardValues = {
    "K": 4,
    "Q": 3,
    "J": 2
  };

  // Calculate the total score based on the provided rules
  let totalScore = 0;
  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    // If the card is in the cardValues object, add its corresponding points to the total score
    if (card in cardValues) {
      totalScore += cardValues[card];
    }
  }

  // Return the total score
  return totalScore;
}

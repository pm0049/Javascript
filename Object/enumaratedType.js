/*
Let's define CARD_SUITS:

const CARD_SUITS = {
    DIAMONDS: 0,
    HEARTS: 1,
    SPADES: 2,
    CLUBS: 3
}
Using this object we can clearly label our card suit:

const card = {
    suit: CARD_SUITS.HEARTS,
    value: 5
}
The value of the suit would still be 1, however this clearly defines what that suit means in its definition! 

Also, if we ever want to change what suit corresponds to which value, we only need to change it once in CARD_SUITS.

 This type of object is commonly referred to as an Enumeration. As with any pre-defined constant, it's common to use UPPER_SNAKE_CASE for enumerations in JavaScript.
*/

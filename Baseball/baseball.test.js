const ScoreCard = require('./baseball');

describe('ScoreCard', () => {
    let scoreCard;

    beforeEach(() => {
      scoreCard = new ScoreCard();
    });

    it('should construct a ScoreCard', () => {
        expect(scoreCard).toBeDefined();
    });

    it('Should create a Score from the begining of a game', () => {
        expect(scoreCard.getScore()).toBe('Home: 0 Away: 0');
    });

    it('Should Add score to the game', () => {
        scoreCard.addEntry(4);
        expect(scoreCard.getScore()).toBe('Home: 0 Away: 1');
    });
})
const {ScoreCard, Team} = require('./baseball');

describe('ScoreCard', () => {
    let scoreCard;
    let team;

    beforeEach(() => {
      scoreCard = new ScoreCard();
      team = new Team()
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

    it('Should increment runs for homerun', () => {
        scoreCard.addEntry(4);
        scoreCard.addEntry(4);
        expect(scoreCard.getScore()).toBe('Home: 0 Away: 2');
    });

    it('Should switch side after three outs', () => {
        scoreCard.addEntry(0);
        scoreCard.addEntry(0);
        scoreCard.addEntry(0);
        scoreCard.addEntry(4);
        expect(scoreCard.getScore()).toBe('Home: 1 Away: 0');
    });
    it('Should switch side twice', () => {
        scoreCard.addEntry(0);
        scoreCard.addEntry(0);
        scoreCard.addEntry(0);
        scoreCard.addEntry(4);
        scoreCard.addEntry(0);
        scoreCard.addEntry(0);
        scoreCard.addEntry(0);
        scoreCard.addEntry(4);
        expect(scoreCard.getScore()).toBe('Home: 1 Away: 1');
    });

    it('should construct a Team', () => {
        expect(team).toBeDefined();
    });

    it('team should display name and score', () => {
        const aTeam = new Team("Foo");
        expect(aTeam.toString()).toBe("Foo: 0");
    });

})

/*
Your school has hired you to keep track of the score at baseball games.
Unfortunately you tend to be rather absent minded because most nights you stay up late playing video games and coding.
Let's create a program that will keep track of the score for us.
We'll need to create a constructor ScoreCard that has two public functions: addEntry and getScore.

addEntry - Takes in the result of an at-bat. This result can be single, double, triple, homerun, or out.

getScore - Returns the score in the format Home: [HOME_SCORE] Away: [AWAY_SCORE]

To keep things simple, base runners will advance the amount of bases equal
to that of the batter's hit (i.e. if the batter hits a double,
    each base-runner will advance two bases).
each base-runner will advance two bases).

A few important baseball rules:
The Away team bats first.
There are three outs in an inning.
After three outs the opposing team hits.
The hits single, double, triple and homerun correspond to the batter reaching bases first, second, third and home respectively.
Base runners start at home and then cycle through the bases first, second, third and home.
Runners score for their team after they reach home. */
const Team = require('../Team/Team');
class ScoreCard {

    constructor( ) {
        this.away = new Team("Away");
        this.home = new Team("Home");
        this.outs = 0;
        this.inBat = this.away;
    };

    getScore() {
        return `${this.home.toString()} ${this.away.toString()}`;
    };

    switchTeam(){    
        if(this.inBat === this.away){
            this.inBat = this.home;
        } else {
            this.inBat = this.away;
        }
        this.outs = 0;
    }

    addEntry(atBat) {
        if(atBat === 0) {
            this.outs += 1;

            if (this.outs === 3) {
                this.switchTeam();
            }

        } else {
            this.inBat.addRun();
        }

    };
};

module.exports = ScoreCard

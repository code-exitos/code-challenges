class Team {
    constructor(name){
        this.name = name;
        this.score = 0;
    }

    toString() {
        return `${this.name}: ${this.score}`;
    }

    addRun(){
        this.score += 1;
    }
   
}

module.exports = Team;
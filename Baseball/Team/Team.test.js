const Team = require('./Team');

describe('Team', () => {
    let team;

    beforeEach(() => {
      team = new Team("Bar");
    });
    
    it('should construct a Team', () => {
        expect(team).toBeDefined();
    });

    it('team should display name and score', () => {
        const aTeam = new Team("Foo");
        expect(aTeam.toString()).toBe("Foo: 0");
    });

    it('it should a run to the team',()=>{
        team.addRun();
        expect(team.toString()).toBe("Bar: 1");
    });
})
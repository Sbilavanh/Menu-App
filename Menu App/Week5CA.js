class Character {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    describe() {
        return `${this.name} is a {this.position}.`;
    }
}

class Team {
    constructor(name) {
        this.name = name;
        this.teamMechwarrior = [];
    }

    addMechwarrior(mechwarrior) {
        if (mechwarrior instanceof Character) {
            this.teamMechwarrior.push(mechwarrior);
        } else {
            throw new Error(`You can only add MechWarriors. Entered character is not a MechWarrior: ${mechwarrior}`);
        }
    }

    describe() {
        return `${this.name} has ${this.teamMechwarrior.length} players.`;
    }
}

class Menu {
    constructor() {
        this.teams = [];
        this.selectedTeam = null;
    }

    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createTeam();
                    break;
                case '2':
                    this.viewTeam();
                    break;
                case '3':
                    this.deleteTeam();
                    break;
                case '4':
                    this.displayTeams();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Battle control Terminated');
    }

    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) create team
            2) select Mechwarrior
            3) delete team
            4) view clan
        `);
    }

    showMainMenuOptions(teamInfo) {
        return prompt(`
            0) back
            1) create player
            2) delete player
            -----------------------
            ${teamInfo}
        `);
    }

    displayTeams() {
        let compString = '';
        for (let i = 0; i < this.teams.length; i++) {
            compString += i + ')' + this.teams[i].name + '\n';
        }
        alert(teamString);
    }

    createTeam() {
        let name = prompt('Enter your Clan name:');
        this.teams.push(new Team(name));
    }

    viewTeam() {
        let index = prompt('Enter the Clan name of the team you wish to see:');
        if (index > -1 && index < this.teams.length) {
            this.selectedTeam = this.teams[index];
            let description = 'Team Name: ' + this.selectedTeam.name + '\n';

            for (let i = 0; i < this.selectedTeam.teamMechwarrior.length; i++) {
                description += i + ')' + this.selectedTeam.teamMechwarrior[i].name
                    + '-' + this.selectedTeam.teamMechwarrior[i].position + '\n';
            }

            let selection = this.showTeamMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createPlayer();
                    break;
                case '2':
                    this.deletePlayer();
            }
        }
    }

    deleteTeam() {
        let index = prompt('Enter the name of the Mechwarrior that you wish to delete:');
        if (index > -1 && index < this.teams.length) {
            this.teams.splice(index, 1);
        }
    }

    createPlayer() {
        let name = prompt('Enter the Mechwarrior name:');
        let position = prompt('Enter the Mechwarrior class:');
        this.selectedTeam.teamMechwarriors.push(new this.createPlayer(name, position));
    }

    deletePlayer() {
        let index = prompt('Enter the name of the Mechwarrior that you wish to delete:');
        if (index > -1 && index < this.selectedTeam.teamMechwarriors.length) {
            this.selectedTeam.teamMechwarriors.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start(); 
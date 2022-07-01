class MechWarrior {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    describe() {
        return `${this.name} plays ${this.position}.`;
    }
}

class Clan {
    constructor(name) {
        this.name = name;
        this.mechWarrior = [];
    }

    addMechwarrior(player) {
        if (player instanceof mechWarrior) {
            this.players.push(mechWarrior);
        } else {
            throw new Error(`You can only add an instance of Mechwarrior. Argument is not a Player ${mechWarrior}`);
        }
    }

    describe() {
        return `${this.name} has ${this.mechWarrior.length} players.`;
    }
}

class Menu {
    constructor() {
        this.clan = [];
        this.selectedClan = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case `1`:
                    this.createclan();
                    break;
                case `2`:
                    this.viewclan();
                    break;
                case `3`:
                    this.deleteclan();
                    break;
                case `4`:
                    this.displayclans();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) create new clan
            2) view clan
            3) delete clan
            4) display all clan
        `);
    }


    showClanMenuOptions(clanInfo) {
        return prompt(`
        0) back
        1) create mechWarrior
        2) delete mechWarrior
        -------------------------
        ${clanInfo}
        `);
    }

    displayClans() {
        let clanString = '';
        for (let i = 0; i < this.clan.length; i++) {
            clanString += i + ')' + this.clans[i].name + '\n';
        }
        alert(clanString);
    }

    createClan() {
        let name = prompt('Enter name for clan:');
        this.clans.push(new clan(name));
    }

    viewClan() {
        let index = prompt('Enter the index of the clan you wish to view:');
        if (index > -1 && index < this.clans.length) {
            this.selectionClan = this.clans[index];
            let description = 'Clan name: ' + this.selectedClan.name + '\n';

            for (let i = 0; i < this.selectedClan.players.length; i++) {
                description += i + ') ' + this.selectedClan.players[i].name + ' - ' + this.selectedClan.players[i].position + '\n';
            }

            let selection = this.showMainMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createMechwarrior();
                    break;
                case '2':
                    this.deleteMechwarrior();
            }
        }
    }

    deleteClan() {
        let index = prompt('Enter the index of the clan you wish to delete:');
        if (index > -1 && index < this.clan.length) {
            this.clans.splice(index, 1);
        }
    }

    createMechwarrior() {
        let name = prompt('Enter name for new Mechwarrior:');
        let position = prompt(`Enter position for new Mechwarrior:`);
        this.selectedClan.mechWarriors.push(new mechWarrior(name, position));
    }

    deleteMechwarrior() {
        let index = prompt('Enter the index of the mechwarrior you wish to delete:');
        if (index > 1 && index < this.selectedClan.mechWarriors.length) {
            this.selectedClan.mechWarriors.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();
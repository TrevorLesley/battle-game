(function() {
    'use strict';

    // const water = document.getElementById('elements').value = 'water';
    // const earth = document.getElementById('elements').value = 'earth';
    // const fire = document.getElementById('elements').value = 'fire';
    // const air = document.getElementById('elements').value = 'air';

    const element = document.querySelector('elements');

    console.log(element);

    const Battle = function () {
        const player = prompt(`Enter player name, then choose your class.`);
        this.player = new Player;
        this.comp = new Comp;
    }

    const Player = function ({ name } = {}) {
        this.name = name;
        this.element = 
        this.health = 100;
    }

    const Comp = function () {
        this.health = 100;
    }



})();

(function() {
    'use strict';

    // const water = document.getElementById('elements').value = 'water';
    // const earth = document.getElementById('elements').value = 'earth';
    // const fire = document.getElementById('elements').value = 'fire';
    // const air = document.getElementById('elements').value = 'air';

    const $element = document.querySelector('#elements');



    const Battle = function () {
        // const player = prompt(`Enter player name, then choose your class.`);
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

    Battle.prototype.start = function() {
      this.attack();
      this.counter();
    }



    Battle.prototype.attack = function() {
      const random = Math.floor(Math.random() * 10);
      let hp = this.comp.health - random;
      this.comp.health = hp;

  }

    Battle.prototype.counter = function() {
      const random = Math.floor(Math.random() * 10);
      let hp = this.player.health - random;
      this.player.health = hp;
    }


const battle = new Battle;
battle.start();
console.log(battle.comp.health);
console.log(battle.player.health);
})();

(function() {
    'use strict';

    // const water = document.getElementById('elements').value = 'water';
    // const earth = document.getElementById('elements').value = 'earth';
    // const fire = document.getElementById('elements').value = 'fire';
    // const air = document.getElementById('elements').value = 'air';

    const $element = document.querySelector('#elements');

    console.log($element.value);
    console.log($element.value);
    console.log($element.value);

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
      const damage = Math.floor(Math.random() * 10);
      let hp = this.comp.health - damage;
      this.comp.health = hp;
      console.log(`comp ${battle.comp.health}`);
  }

    Battle.prototype.counter = function() {
      const damage = Math.floor(Math.random() * 10);
      let hp = this.player.health - damage;
      this.player.health = hp;
      console.log(`player ${battle.player.health}`);
    }

const battle = new Battle;
const click = document.querySelector('.attack-button');

click.addEventListener('click', function () {
  if(battle.player.health > 0 && battle.comp.health > 0);
  battle.start();
})



})();
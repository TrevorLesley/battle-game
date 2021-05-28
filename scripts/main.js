(function() {
    'use strict';

    // const water = document.getElementById('elements').value = 'water';
    // const earth = document.getElementById('elements').value = 'earth';
    // const fire = document.getElementById('elements').value = 'fire';
    // const air = document.getElementById('elements').value = 'air';

    const $element = document.querySelector('#elements');



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





var health;

function Player (name) {
  this.name = name;
  this.health = 100;
}

function Comp () {
  this.health = 100;
}

function Battle () {
  this.player = new Player();
  this.enemy = new Comp();
  this.attack();
}

  // while(this.player.health > 0 && this.player.health > 0) {
  // this.attack();
  //
  // }

Battle.prototype.attack = function() {
const random = Math.floor(Math.random() * 10);
hp = this.player.health - random;
// return hp;
console.log(hp);
}

// Battle.prototype.counter = function() {
//
// }

const battle = new Battle;






//
// console.log('hi');
})();

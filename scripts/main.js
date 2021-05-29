(function() {
    'use strict';

    // const water = document.getElementById('elements').value = 'water';
    // const earth = document.getElementById('elements').value = 'earth';
    // const fire = document.getElementById('elements').value = 'fire';
    // const air = document.getElementById('elements').value = 'air';

    const source = document.querySelector('#charList').innerHTML;
    const template = Handlebars.compile(source);
    const context = {
        element: charType.results,
    }
    const html = template(context);
    document.querySelector('.card-body').innerHTML = html;

    var $element = document.querySelector('#elements');
    $element.addEventListener("change", changeElement);

    function changeElement() {
      var value = $element.options[$element.selectedIndex].value;
      console.log(value);
    }


    const Battle = function () {
        // const player = prompt(`Enter player name, then choose your class.`);
        this.player = new Player;
        this.comp = new Comp;
      }


    const Player = function () {
        this.charType = {charType};
        this.element = ($element.value);
        this.element = this.charType;
        this.health = 100;
    }

    // console.log(this.player);

    const Comp = function () {
        // this.charType = charType
        this.health = 100;
    }

    Battle.prototype.start = function() {
      this.attack();
      setTimeout(function(){ battle.counter(); }, 2000);

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
      let currentPlayerHp = battle.player.health;
      console.log(`player ${battle.player.health}`);
    }

const battle = new Battle();
const attackClick = document.querySelector('.attack-button');

attackClick.addEventListener('click', function () {
  if(battle.player.health > 0 && battle.comp.health > 0){
  battle.start();
}
})

const playAgainClick = document.querySelector('.reset');

playAgainClick.addEventListener('click', function () {
  battle.player.health = 100;
  battle.comp.health = 100;
})


const source = document.querySelector('#playerhpbar-template').innerHTML;
const template = Handlebars.compile(source);
const context = {
  playerhp: battle.player.health,
}
const html = template(context);
// console.log(html);
document.querySelector('.player-hp-status').innerHTML = html;



})();

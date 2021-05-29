(function() {
    'use strict';

    // const water = document.getElementById('elements').value = 'water';
    // const earth = document.getElementById('elements').value = 'earth';
    // const fire = document.getElementById('elements').value = 'fire';
    // const air = document.getElementById('elements').value = 'air';

// <<<<<<< HEAD
//     const source = document.querySelector('#charList').innerHTML;
//     const template = Handlebars.compile(source);
//     const context = {
//         element: charType.results,
//     }
//     const html = template(context);
//     document.querySelector('.card-body').innerHTML = html;
// =======
    var compHpDisplay = document.querySelector(".computer-hp");
    var playerHpDisplay = document.querySelector(".player-hp");

    var $element = document.querySelector('#elements');
    $element.addEventListener("change", changeElement);

    function changeElement() {
      var value = $element.options[$element.selectedIndex].value;
      console.log(value);
    }


    const Battle = function () {
        this.player = new Player
        this.comp = new Comp;
      }


    const Player = function () {
        this.element = ($element.value);
        this.element = this.charType;
        this.health = 100;
    }



    const Comp = function () {
        this.health = 100;
    }

    Battle.prototype.start = function() {
      this.attack();
      setTimeout(function(){
        battle.counter();
        playerHpDisplay.innerHTML = (`${battle.player.health}%`);
        playerHpDisplay.style.width = `${battle.player.health}%`;
      }, 2000);

    }


    Battle.prototype.attack = function() {
      const damage = Math.floor(Math.random() * 10) + 1;
      alert(`Your hit was worth ${damage} point(s)!`);
      let hp = this.comp.health - damage;
      this.comp.health = hp;
      console.log(`comp ${battle.comp.health}`);
      compHpDisplay.innerHTML = (`${battle.comp.health}%`);
      compHpDisplay.style.width = `${battle.comp.health}%`;
  }

    Battle.prototype.counter = function() {
      const damage = Math.floor(Math.random() * 10) + 1;
      alert(`Computer's hit was worth ${damage} point(s)!`);
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
  compHpDisplay.innerHTML = "100%";
  playerHpDisplay.innerHTML = "100%";
  compHpDisplay.style.width = "100%";
  playerHpDisplay.style.width = "100%";
})

})();

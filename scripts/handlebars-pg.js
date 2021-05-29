

const source = document.querySelector('#playerhpbar-template').innerHTML;
const template = Handlebars.compile(source);
const context = {
  playerhp: battle.player.health,
}
const html = template(context);
// console.log(html);
document.querySelector('.player-hp-status').innerHTML = html;




// <div class="progress-bar computer-hp" role="progressbar" style="width: {{playerhp}}%;" aria-valuenow="{{playerhp}}" aria-valuemin="0" aria-valuemax="100">25%</div>


// In html:
// <script id="playerhpbar-template" type="text/x-handlebars-template">
//       <div class="progress-bar computer-hp" role="progressbar" style="width: {{playerhp}}%;" aria-valuenow="{{playerhp}}" aria-valuemin="0" aria-valuemax="100">25%</div>
//    </script>

(function() {

  'use strict';

  const source = document.querySelector('#shoe-template').innerHTML;
  const template = Handlebars.compile(source);
  const context = {
    name: 'Eric',
  }
  const html = template(context);
  console.log(html);
  document.querySelector('.card-title-one').innerHTML = html;





})();

var page = require('page')
var yo = require('yo-yo')

page('/', function (ctx, next) {
})

page('/signup', function (ctx, next) {
  var main = document.getElementById('main-container')
  main.innerHTML('<p>joder</p>')
})

page()
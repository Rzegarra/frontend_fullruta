var page = require('page')
var empty = require('empty-element')
var template = require('./template')
var title = require('title')


page('/', function (ctx, next) {
  title('vego')
  var main = document.getElementById('main-container')
  var clockdown = document.getElementById('clockdown')
  empty(clockdown)
  empty(main).appendChild(template);
})
var page = require('page')
var empty = require('empty-element')
var template = require('./template')
var title = require('title')

page('/signup', function (ctx, next) {
  title('vego-signup')
  var main = document.getElementById('main-container')
  var mapContainer = document.getElementById('map-init')
  empty(mapContainer)
  empty(main).appendChild(template);
})
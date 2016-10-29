var page = require('page')
var empty = require('empty-element')
var template = require('./template')
var title = require('title')
var request = require('superagent')
var axios = require('axios')
var yo = require('yo-yo')
var renderMap= require('../maps')
empty(clockdown)
// page('/', asyncLoad, function (ctx, next) {
//   title('vego')
//   var main = document.getElementById('main-container')
//   var clockdown = document.getElementById('clockdown')

  
//   empty(main).appendChild(template(ctx.pictures));
// })

// page('/', asyncLoad, function (ctx, next) {
//   title('Platzigram');
//   var main = document.getElementById('main-container');
//   var clockdown = document.getElementById('clockdown')

//   empty(main).appendChild(template(ctx.pictures));
// })

// function loadPicturesFetch  (ctx, next) {
//   fetch('api/pictures')
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (pictures) {
//       ctx.pictures = pictures
//       next()
//     })
//     .catch(function (err){
//       console.log(err)
//     })
// }
    
// async function asyncLoad(ctx, next) {
//   try {
//     ctx.pictures = await fetch('/api/pictures').then(res => res.json());
//     next();
//   } catch (err) {
//     return console.log(err);
//   }
// }
var position= {lat: -16.409047, lng: -71.537451}
var lat = -16.409047
var long = -71.537451

var main = document.getElementById('main-container')
var mapContainer = document.getElementById('map-init')

page('/', loading, loadPicturesAxios, function (ctx, next) {
  title('vego')
  var node = document.getElementById("loadIcon");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
  var clockdown = document.getElementById('clockdown')
  var divMap = yo`<div id="map"></div>`
  empty(mapContainer).appendChild(divMap)
  document.getElementById('map').appendChild(renderMap(lat, long))
  empty(main).appendChild(template(ctx.pictures));

})

function loadPicturesAxios  (ctx, next) {
  console.log('la m,..')
  axios
    .get('/api/pictures')
    .then(function (res) {
      ctx.pictures = res.data
      next()
    })
    .catch(function (err) {
      console.log(err)
    })}

function loading (ctx, next) {
  console.log('por la r,,,')
  var el = yo`<div id="loadIcon">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>`
  empty(mapContainer).appendChild(el)
  // empty(main).appendChild(el)
  next()
}
// page('/', loadPictures, function (ctx, next) {
//   title('vego')
//   var main = document.getElementById('main-container')
//   var clockdown = document.getElementById('clockdown')

  
//   empty(main).appendChild(template(ctx.pictures));
// })

// function loadPictures  (ctx, next) {
  
//   request
//     .get('/api/pictures')
//     .end(function (err, res) {
//       if (err) return console.log(err)
//       ctx.pictures = res.body
//       next()
//     })
// }
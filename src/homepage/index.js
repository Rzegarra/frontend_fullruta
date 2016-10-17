var page = require('page')
var empty = require('empty-element')
var template = require('./template')
var title = require('title')
var request = require('superagent')
var axios = require('axios')
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





page('/', loadPicturesAxios, function (ctx, next) {
  title('vego')
  var main = document.getElementById('main-container')
  var clockdown = document.getElementById('clockdown')
  empty(main).appendChild(template(ctx.pictures));
})

function loadPicturesAxios  (ctx, next) {
  console.log('axios')
  axios
    .get('/api/pictures')
    .then(function (res) {
      ctx.pictures = res.data
      next()
    })
    .catch(function (err) {
      console.log(err)
    })}


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
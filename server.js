var express = require("express")
var app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

// function restrict (req, res, next) {
//   if(req.user)  return next()
//   res.redirect('/signup')
// }

// app.get('/', restrict, function (req,res) {
//   res.render('index', {title: 'vego'})
// })

app.get('/', function (req,res) {
  res.render('index', {title: 'vego'})
})

app.get('/signup', function (req,res) {
  res.render('index')
})

app.get('/signin', function (req,res) {
  res.render('index')
})

app.get('/api/pictures', function (req, res, next) {

  var pictures = [
    {
      user : {
        username: 'zeg',
        avatar:'https://pbs.twimg.com/profile_images/651452887177003008/ByrHXrqm.jpg'
      },
      url: 'iPhone6.png',
      likes: 10,
      liked: false,
      createAt: new Date()
  },
  {
      user : {
        username: 'zeg',
        avatar:'https://pbs.twimg.com/profile_images/651452887177003008/ByrHXrqm.jpg'
      },
      url: 'iPhone6.png',
      likes: 2,
      liked: true,
      createAt:new Date().setDate(new Date().getDate()-10)
  }
  ]
  setTimeout(function () {
    res.send(pictures)
  }, 2000)
  
})
app.listen(3000, function (err) {
  if (err) return console.log('hubo un error'),process.exit(1);
  console.log('vego escuchando en el puerto 3000')
})
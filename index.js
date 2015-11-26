var weather = require('weather')
var express = require('express')
var Promise = require('bluebird')

function get_weather(argument) {
  var params = {
      location : argument,
      unit     : 'c', // Celcius(default, "c") or Fahrenheit ("f")
      appid    : 'dj0yJmk9Y0t3enhhVFNSS3FnJmQ9WVdrOWFYTktXRXQ1TjJjbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD04NQ--',
      logging  : false //Debug info or not
  }
  return new Promise(function(resolve, reject) {
    weather(params, function(data) {
      resolve(data)
    })
  })
}

var app = express()
app.get('/', function (req, res) {
  get_weather(req.query.id)
    .then(function (argument) {
      res.send(argument)
    })
})
app.listen(3000)

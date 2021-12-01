var express = require('express')

var maioresplanetas = [
  { planeta: "Júpiter", diâmetro: "139.820 km"},
  { planeta: "Saturno", diâmetro: "116.460 km"},
  { planeta: "Urano", diâmetro: "50.724 km"},
  { planeta: "Netuno", diâmetro: "49.244 km"},
  { planeta: "Terra", diâmetro: "12.742 km"}
]

var api = express()

api.get("/", (req, res) => {
  res.json(maioresplanetas)
})

api.listen(3000)
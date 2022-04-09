
const express = require('express')
const app = express()
const Fruits = require('db.json')

// Middleware
app.use(express.json())

app.get('/Fruits', (req,res) => {
    res.status(200).json(Fruits)
})

app.get('/Fruits/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const Fruit = Fruits.find(Fruit => Fruit.id === id)
    res.status(200).json(Fruit)
})

//AJOUTER UN FRUIT
app.post('/Fruits', (req,res) => {
  Fruits.push(req.body)
  res.status(200).json(Fruits)
})

//SUPPRIMER UN FRUITS 
app.delete('/Fruits/:id', (req,res) => {
  const id = parseInt(req.params.id)
  let Fruit = Fruits.find(Fruit => Fruit.id === id)
  Fruits.splice(Fruits.indexOf(Fruit),1)
  res.status(200).json(Fruits)
})

//AFFICHER UN FRUITS SELON SON GROUPE SANGUIN
app.get('/Fruits', (req,res) => {
  res.status(200).json(Fruits)
})

app.get('/Fruits/:id', (req,res) => {
  const groupe_sanguin = parseInt(req.params.groupe_sanguin)
  const Fruit = Fruits.find(Fruit => Fruits.id === id)
  res.status(200).json(Fruits) 
})

app.listen(8080, () => {
    console.log('Serveur à l ecoute')
  })
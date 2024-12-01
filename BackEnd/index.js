const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose');
const Navbar = require('./src/model/NavbarModel');


app.use(cors()) // access permission to send data from frontend to backend
app.use(express.json()) // convert all data (which come from FrontEnd)) string to JSON


mongoose.connect('mongodb+srv://mernCrushCours:Mern321@cluster0.idcnaio.mongodb.net/MERN_Crush_Course?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'));

// app.get('/', function (req, res) {
//   res.send('backEnd Run successfully.!')
// })

app.post('/navBar', function (req, res) {
  console.log(req.body) 
  let data = new Navbar(req.body)
  data.save()
  res.send({message:"NavBar Created successFully. !"})
})

app.get('/navBar', async function (req, res) {
 let data = await Navbar.findOne({})
 res.send(data)
})
app.put('/navBar/:id', function (req, res) {
  console.log(req.params.id) 
  // let data = new Navbar(req.body)
  // data.save()
  // res.send({message:"NavBar Created successFully. !"})
})

app.listen(5050)
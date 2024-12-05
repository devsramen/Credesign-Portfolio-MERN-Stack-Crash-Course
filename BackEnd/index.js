const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose');
const Navbar = require('./src/model/NavbarModel');
const Banner = require('./src/model/BannerModel');
const ServiceModel = require('./src/model/ServiceModel');


app.use(cors()) // access permission to send data from frontend to backend
app.use(express.json()) // convert all data (which come from FrontEnd)) string to JSON


mongoose.connect('mongodb+srv://mernCrushCours:Mern321@cluster0.idcnaio.mongodb.net/MERN_Crush_Course?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'));

// NavBar Route Start
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
  console.log(req.params.id );
  Navbar.findByIdAndUpdate(req.params.id,req.body).then(()=>{
    res.send({message:"NavBar Updated successFully. !"})
  })
})
// NavBar Route End

// Banner Route Start
app.post("/banner",function(req,res){
  let data = new Banner(req.body)
  data.save()
  res.send({message: "Banner Created successfully..!"})  
})
app.get('/banner', async function (req, res) {
 let data = await Banner.findOne({})
 res.send(data)
})
app.put('/banner/:id', function (req, res) {
  Banner.findByIdAndUpdate(req.params.id,req.body).then(()=>{
    res.send({message:"Banner Updated successFully. !"})
  })
})
// Banner Route End

// Service Route Start
app.post('/service', async function (req,res){
    let data = new ServiceModel(req.body)
    await data.save();
    res.send({message: "Service Created successfully..!"})

    console.log(req.body);
})
app.get('/service', async function (req, res) {
    let data = await ServiceModel.find({})
    res.send(data);
})



// Service Route End

// Service Route Start
// Service Route End



app.listen(5050)
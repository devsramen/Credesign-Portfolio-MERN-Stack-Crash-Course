const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose');
const Navbar = require('./src/model/NavbarModel');
const Banner = require('./src/model/BannerModel');
const ServiceModel = require('./src/model/ServiceModel');
const multer = require("multer");
const nodemailer = require("nodemailer");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        console.log(file, "file");
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })


app.use(cors()) // access permission to send data from frontend to backend
app.use(express.json()) // convert all data (which come from FrontEnd)) string to JSON
app.use('/uploads', express.static('./uploads'))


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
app.post("/banner",upload.single("image"),function(req,res){
    console.log(req.body,"banner")
  let data = new Banner({...req.body,image: req.file.path})
  data.save()
  res.send({message: "Banner Created successfully..!"})  
})
app.get('/banner', async function (req, res) {
 let data = await Banner.findOne({})
 res.send(data)
})
app.put('/banner/:id',upload.single("image"), function (req, res) {
    // console.log(req.file.path,"banner")
  Banner.findByIdAndUpdate(req.params.id,{...req.body,image: req.file.path}).then(()=>{
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
app.get('/service', async function (req,res) {
    let data = await ServiceModel.find({})
    res.send(data);
})
app.delete('/serviceDelete/:id', async function (req,res) {
    let data = await ServiceModel.findByIdAndDelete(req.params.id)
    res.send({message: "Service Deleted successfully..!"})
})
app.put('/serviceUpdate/:id', async function (req,res){
    await ServiceModel.findByIdAndUpdate(req.params.id,req.body).then(()=>{
        res.send({message: "Service Updated successfully..!"})
    })
})
// Service Route End

// Contact Route start
app.post('/email',async function(req,res){
    console.log(req.body)
    const transporter = nodemailer.createTransport({
        service:'gmail',
        secure: false, // true for port 465, false for other ports
        auth: {
            user: "printrb72@gmail.com",
            pass: "prjh caye clkc pgci",
        },
    });

    const info = await transporter.sendMail({
        from: '"ERP" <maddison53@ethereal.email>', // sender address
        to: "example@example.com", // list of receivers
        subject: req.body.subject, // Subject line
        html: `
        <b>Name : </b>${req.body.fullName}
        <b>Email : </b>${req.body.email}
        <b>Message : </b>${req.body.message}
        `
    });

    console.log("Message sent: %s", info.messageId);

    res.send({message:"Email Sent successfully..!"})
})
// Contact Route end



app.listen(5050)
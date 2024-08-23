const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
var moment = require('moment');
const Student = require("./models/studentSchema");

// Auto Refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

//  Get Request

app.get('/', (req, res) => {

    Student
    .find()
    .then( result => {
      res.render("index.ejs", {
        arr: result,
        moment: moment,
      });
    })
    .catch( err => {
      console.log(err);
    });
})

app.get("/user/add.html", (req, res) => {
  res.render("user/add.ejs", {
 
  });
});

// Post Request
 
app.post("/user/add.html", (req, res) => {
  student
    .create(req.body)
    .then( result => {
      res.redirect("/");
    })
    .catch( err => {
      console.log(err);
    });
});



mongoose.connect("mongodb+srv://omar:l7km4uWz6znxoUVV@cluster0.ur2s9.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
   })
   .catch((err) => {
     console.log(err);
   });
var express = require("express");
var path = require("path");
var Reservation = require("./reservation");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, function(){
    console.log("We're live on Port " + PORT);
    console.log("Reservations: " + newReservation.customerName);
});

var reservationList = [];
var waitList = [];
var tempArr = [];

for (let i = 0; i < 7; i++) {
    var newReservation = new Reservation("Bob Jones", "404-444-4444", "bob@hotmails.com", "bob" + i);
    tempArr.push(newReservation);
}

console.log("Temp Arr count = " + tempArr.length);

//Routes
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservations", function(req, res){
    res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
});

//APIs
app.get("/api/tables", function(req, res){
    return res.json(reservationList);
});

app.get("/api/waitlist", function(req, res){
    return res.json(waitList);
});

//Posts
app.post("/api/tables", function(req, res) {
  //Take in json
  //Check if there is remaining space
  //add json object to reservation array or wait array
  //confirm if reservation or waitlist
  var newRes = req.body;
  console.log(newRes);

  if(reservationList.length < 5){
    reservationList.push(newRes);
    res.json(reservationList);
    console.log("You have a reservation!");
    console.log("reservationList length = " + reservationList.length);
  }else{
      waitList.push(newRes);
      res.json(waitList);
      console.log("You are on the Wait List");
      console.log("waitList length = " + waitList.length);
  }

  
});
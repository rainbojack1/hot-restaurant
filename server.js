var express = require("express");
var path = require("path");
var reservation = require("./reservation");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, function(){
    console.log("We're live on Port " + PORT);
    console.log("Reservations: " + newReservation.customerName);
});

var peopleList = [];
var newReservation = new reservation("Bob Jones", "404-444-4444", "bob@hotmails.com", "bob22");
peopleList.push(newReservation);

//Routes
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservation", function(req, res){
    res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function(req, res){
    res.json(tables);
});

app.get("/api/waitlist", function(req, res){
    res.json(waitlist);
});
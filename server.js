// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// User reservation (DATA)
// =============================================================
var reserve = [
   {customerID: 1
  name: "khiem",
  phone: "0123456789",
  email: "khiem@mail.com",
  },
  {customerID: 2
  name: "ami",
  phone: "1234567890",
  email: "ami@mail.com",
  },
  {customerID: 3
  name: "andrea",
  phone: "2345678901",
  email: "andrea@mail.com",
  },
];
//User in wait list(DATA)
//==============================================================
var waitList = [
   {customerID: 4
  name: "teddy",
  phone: "3456789012",
  email: "teddy@mail.com",
  }
];
// Routes
// =============================================================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "homepage.html"));
});

app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/api/tables", function(req, res) {
  res.json(reservations);
});

app.get("/api/tables", function(req, res) {
  res.json(waitList);
});

// Create New Characters - takes in JSON input
app.post("/reserve", function(req, res) {
  var newReserve = req.body;
  newReserve.routeName = newReserve.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReserve);

  reserve.push(newReserve);

  res.json(newReserve);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

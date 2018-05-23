var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

require("./routes/apiRoutes", app)
require("./routes/htmlRoutes", app)

var tables = [
    {
        "name": "Me",
        "phoneNumber": 5123456789,
        "customerEmail": "me@me.com",
        "customerId": 1
    }
];

var waitlist = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/home.html"));
});

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "/public/tables.html"));
});

app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "/public/reservation.html"));
});

// Gets JSON
app.get("/api/tables", function(req, res){
    return res.json(tables);
});

app.get("/api/waitlist", function(req, res){
    return res.json(waitlist);
});
 
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
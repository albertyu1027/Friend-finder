var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var answers = [
{
	name: "Jessica Alba",
	photo: "http://campfire-capital.com/wp-content/uploads/2017/04/jessica-alba-at-honest-beauty-girls-night-out-2017_1-1.jpg",
	scores: [5, 5, 5, 5, 5, 5, 5, 5 ,5 ,5]
},
{
	name: "Kristin Kreuk",
	photo: "https://vignette.wikia.nocookie.net/smallville/images/b/b9/KreukKristin04_518_PI_SS-1-.jpg/revision/latest/scale-to-width-down/249?cb=20110213131936",
	scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
}

];

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/api/friends", function(req, res) {
  res.json(answers);
});

app.post("/api/friends", function(req, res) {

  var newUser = req.body;
  //newUser.name = newUser.name.replace(/\s+/g, "").toLowerCase();

  console.log(newUser);

  answers.push(newUser);

  res.json(newUser);

});

var PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
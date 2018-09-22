//Require dotenv npm to link Spotify keys file
require("dotenv").config();

//Require keys.js file
var keys = require("./keys.js");

//Require request npm
var request = require("request")

//Require spotify npm
var Spotify = require('node-spotify-api');
//Save spotify key to a variable
var spotify = new Spotify(keys.spotify);

//Require moment npm
var moment = require('moment');
moment().format();


var nodeArgs = process.argv;
var userInput = "";

//Get user input for song/artist/movie name
//Loop starting at process.argv[3]
for (var i = 3; i < nodeArgs.length; i++) {
    //If userInput is more than 1 word
    if (i > 3 && i < nodeArgs.length) {
        userInput = userInput + "%20" + nodeArgs[i];
    }
    //If userInput is only 1 word
    else {
        userInput += nodeArgs[i];
    }
}

var userCommand = process.argv[2];
switch (userCommand) {
    case "concert-this":
        //Run request to bandsintown with the specified artist
        var queryURL = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp"
        request(queryURL, function (error, response, body) {
            //If no error and response is a success
            if (!error && response.statusCode === 200) {
                //Parse the json response
                var data = JSON.parse(body);
                //Loop through array
                for (var i = 0; i < data.length; i++) {
                    //Get venue name
                    console.log("Venue: " + data[i].venue.name);
                    //Get venue location
                    //If statement for concerts without a region
                    if (data[i].venue.region == "") {
                        console.log("Location: " + data[i].venue.city + ", " + data[i].venue.country);
                    } else {
                        console.log("Location: " + data[i].venue.city + ", " + data[i].venue.region + ", " + data[i].venue.country);
                    }
                    //Get date of show
                    var date = data[i].datetime;
                    date = moment(date).format("MM/DD/YYYY");
                    console.log("Date: " + date)
                    console.log("----------------")
                }
            }
        });
        break;
    case "spotify-this-song":
        console.log("spotify-this-song");
        break;
    case "movie-this":
        console.log("movie-this");
        break;
    case "do-what-it-says":
        console.log("do-what-it-says");
        break;
}
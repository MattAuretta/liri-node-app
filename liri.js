var keys = require("./keys.js");

require("dotenv").config();

var request = require("request")

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var moment = require('moment');
moment().format();


var command = process.argv[2];
switch(command){
    case "concert-this":
    console.log("concert-this");
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
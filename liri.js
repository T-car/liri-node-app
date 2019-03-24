//calling packages 
var dotenv = require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment =require("moment");
var spotify = require("node-spotify-api");
var fs = require("fs");

// var spotify = new Spotify(keys.spotify);

//command to determine which function to run
//movie-this, spotify this song, concert-this, do what it says
var command = process.argv[2];


var searchTerm = process.argv.slice(3).join(" ");



//Movie function
function movieThis (){
console.log("in movieThis-------------\n");

//Calling the OMBD API
axios.get("http://www.omdbapi.com/?&apikey=d152e370&t=" + searchTerm)
    //Call back function providing the raw data from 
    .then(function(response) {
        //logging OMDB Data from axios call
        console.log(response.data);

        //parsing data to get specific fields per requirements
        // console.log("Title" + "" + Response.data.Title);
        // console.log("Year" + "" + Response.data.Year);
        // console.log("IMDB" + "" + Response.data.Title);
        // console.log("RottenTomatoes" + "" + Response.data.Ratings[1].Value);
        // console.log("Country" + "" + Response.data.Title);
        // console.log("Language" + "" + Response.data.Title);
        // console.log("Plot" + "" + Response.data.Title);
        // console.log("Actors" + "" + Response.data.Title);
    });
};

if (command === "movie-this"){
    console.log("inside start function")

    movieThis();
};
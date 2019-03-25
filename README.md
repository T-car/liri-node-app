# liri-node-app

## Video Example
https://drive.google.com/file/d/1NRzv_we5uyb_6FisH59hWB1nsAKKihLz/view

## Description
This tool uses different APIs to let the user seach for concerts, songs and movies using node.js

## Functions
This tool uses 4 main functions:
* `concert-this`
* `spotify-this-song`
* `movie-this`
* `do-what-it-says`

##Concert-this
When running this command it uses Bands in Town API to pull:
* City
* Date
* Venue

Example:
* node liri concert-this Cardi B

##Movie-this
When running this command it uses OMDB API to pull:
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.

Example:
* node liri movie-this Batman

Default Search if no input:
* Mr. Nobody

##spotify-this-song
When running this command it uses Spotify API to pull:
     * Artist(s)
     * The song's name
     * A preview link of the song from Spotify
     * The album that the song is from

Example:
* node liri spotify-this-song hey jude

Default Search if no input:
* Mr. Nobody

##do-what-it-says
*It should run `spotify-this-song` for "I Want it That Way," 

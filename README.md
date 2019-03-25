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

## Concert-this
When running this command it uses Bands in Town API to pull:
1. City
2. Date
3. Venue

Example:
* node liri concert-this Cardi B

## Movie-this
When running this command it uses OMDB API to pull:
1. Title of the movie.
2. Year the movie came out.
3. IMDB Rating of the movie.
4. Rotten Tomatoes Rating of the movie.
5. Country where the movie was produced.
6. Language of the movie.
7. Plot of the movie.
8. Actors in the movie.

Example:
* node liri movie-this Batman

Default Search if no input:
* Mr. Nobody

## spotify-this-song
When running this command it uses Spotify API to pull:
1. Artist(s)
2. The song's name
3. A preview link of the song from Spotify
4. The album that the song is from

Example:
* node liri spotify-this-song hey jude

Default Search if no input:
* Mr. Nobody

## do-what-it-says
* Uses a random.txt file with preset search functionality
* It should run `spotify-this-song` for "I Want it That Way," 

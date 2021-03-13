/////////////// GLOBAL VARIABLES /////////////////////////////

const cityChoice = document.querySelector("#city-choice");
let currentMood = 'happy'; // test hard-code phrase to be concatenated
let moods = ["happy", "angry", "love", "sad", "crazy", "chill"];
let currentCity = ""; // set by user choice in pulldown
let currentWeather = {}; // JSON object returned from OpenWeather call
let currentWeatherDesc = 'Clear'; // 1 word, comes from OpenWeather API's "main" key
let shazamSearch = (currentMood + "%20" + currentWeatherDesc); // concat weather + mood
let currentPlaylist = []; // final returned array from function getMusic()
let currentSong = []; // array of song title & artist, needed for thumbs ratings
let likedSongs = [];
let unlikedSongs = [];

console.log(currentWeatherDesc);

/////////////// EVENT LISTENERS /////////////////////////////

// MOOD BUTTON LISTENERS
$(".smileBtn").on("click", function (e) {
  currentMood = moods[0];
  getMusic(shazamSearch);
});
$(".angryBtn").on("click", function (e) {
  currentMood = moods[1];
  getMusic(shazamSearch);
});
$(".loveBtn").on("click", function (e) {
  currentMood = moods[2];
  getMusic(shazamSearch);
});
$(".sadBtn").on("click", function (e) {
  currentMood = moods[3];
  getMusic(shazamSearch);
});
$(".crazyBtn").on("click", function (e) {
  currentMood = moods[4];
  getMusic(shazamSearch);
});
$(".chillBtn").on("click", function (e) {
  currentMood = moods[5];
  getMusic(shazamSearch);
});

// CITY PULLDOWN CHANGE LISTENER
cityChoice.addEventListener('click', (event) => {
  console.log(event.target.value);
  getWeather(event.target.value);
});

// THUMBS UP/DN BUTTONS LISTENER
$("#upThumb").on("click", function (e) {
  // add to likedSongs
});
$("#dnThumb").on("click", function (e) {
  // add to unlikedSongs, forward the playing song to next on playlist
});

////////////////////////// FUNCTIONS /////////////////////////////////

/////////////// FUNCTION getWeather
function getWeather(cityCode) {
  let appID = "c766e07983131bea43b14f794d29153e";
  let weatherStr = "https://api.openweathermap.org/data/2.5/weather?id=" + cityCode + "&appid=" + appID + "&units=imperial";

  fetch(weatherStr)
  .then(response => {
    console.log(response.json());
  })
  .catch(err => {
    console.error(err);
  });


/////////////// FUNCTION getMusic
function getMusic(shazamSearch) {
  const weatherSongs = {
    async: true,
    crossDomain: true,
    url:
      "https://shazam.p.rapidapi.com/search?term=" + currentMood + "&locale=en-US&offset=0&limit=10",
    method: "GET",
    headers: {
      "x-rapidapi-key": "7463f1062fmsh1fe8735365773c9p140f00jsne6b9b6acaa80",
      "x-rapidapi-host": "shazam.p.rapidapi.com",
    },
  };
  $.ajax(weatherSongs).done(function (response) {
    console.log(response);
    // window.location.href = response.tracks.hits[0].track.url; // TESTING FORWARD
    currentPlaylist = response;
  });
}
// getMusic(currentMood); // TESTING CALL


/////////////// FUNCTION userRatings
// function userRatings () {

// }
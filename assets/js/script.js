/******************************************
 * GLOBAL VARIABLES
 ******************************************/
var weather = {
    rainy: {
        genres: ['classical'],
        keywords: ['sad'],
    },
    sunny: {
        genres: ["rock"],
        keywords: ["happy"],
    },
};
var moods = {
    userinput: { key1: value1, key2: value2 },
    happy: {
        genres: ["pop"],
    },
    sad: {
        genres: [],
        keywords: []
    }
}

var happyBtn = $('.happyBtn');
var angryBtn = $('.angryBtn');
var loveBtn = $('.loveBtn');
var sadBtn = $('.sadBtn');
var crazyBtn = $('.crazyBtn');
var chillBtn = $('.chillBtn');

var userInput = "happy"; // test input
var keywords = moods[userInput].keywords;


/******************************************
 * GLOBAL FUNCTIONS
 ******************************************/


/**********************
 * Function: getWeather -- make API call to OpenWeatherMap */
function getWeather() {
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "7463f1062fmsh1fe8735365773c9p140f00jsne6b9b6acaa80",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
    })
        .then(response => {
            console.log(response); // change this output location
        })
        .catch(err => {
            console.error(err); // change this error handling output
        });
}

/**********************
 * Function: getMusic -- search Shazam for playlist with querystring built from user input */
function getMusic(mood) {
    const settings = {
        async: true,
        crossDomain: true,
        url:
            'https://shazam.p.rapidapi.com/search?term=' +
            mood +
            '&locale=en-US&offset=0&limit=10',
        method: 'GET',
        headers: {
            'x-rapidapi-key': '',
            'x-rapidapi-host': 'shazam.p.rapidapi.com',
        },
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        // update the DOM html
    });
}
getMusic(userInput); // test console function call



/******************************************
 * Function: playVideo -- search YouTube for returned 1st song & play video
 *
 * CODE GOES HERE
 *
 ******************************************/





/******************************************
 * Function: loadTrack -- Is this now obsolete given the need to play video from YouTube?!
 ******************************************/

/**********************
 * Music player variables -- now obsolete given YouTube? */
 var nowPlaying = $('.nowPlaying');
var trackArt = $('.trackArt');
var trackName = $('.trackName');
var trackArtist = $('.trackArtist');
var playpauseBtn = $('.playpausetrack');
var nextBtn = $('.nexttrack');
var prevBtn = $('.prevtrack');
var currentTime = $('.current-time');
var duration = $('.totalDuration');
var trackIndex = 0;
var isPlaying = false;
var updateTimer;
var currentTrack = document.createElement('audio');

var trackList = [
    path

];

// clears the duration from previous track on new track load
function loadTrack(trackIndex) {
    clearInterval(updateTimer);
    resetValues();
    console.log(trackList);
    // Loads a new track
    currentTrack.src = trackList[trackIndex].path;
    currentTrack.load();

    // update timer
    updateTimer = setInterval(seekUpdate, 1000);

    // move to next track when song ends
    currentTrack.addEventListener('ended', nextTrack);
}

$('.playpausetrack').click(function playpauseTrack() {
    if (!isPlaying) playTrack();
    else pauseTrack();
},
    function playTrack() {
        currentTrack.play();
        isPlaying = true;

        playpauseBtn.innerHTML = '<i class = "fa fa-pause-circle fa-2x"><i/>';

    },
    $('.playpausetrack').click(function pauseTrack() {
        currentTrack.pause(trackIndex);
        isPlaying = false;

        playpauseBtn.innerHTML = '<i class = "fa fa-play-circle fa-2x"><i/>';

    },
        $('.nexttrack').click(function nextTrack() {
            // Go back to the first track if the
            // current one is the last in the track list
            if (trackIndex < trackList.length - 1)
                trackIndex = +1;
            else trackIndex = 0;

            // Load and play the new track
            loadTrack(trackIndex);
            playTrack();
        },

            $('.prevtrack').click(function prevTrack() {
                // Go back to the last track if the
                // current one is the first in the track list
                if (trackIndex > 0)
                    trackIndex = -1;
                else trackIndex = trackList.length;

                // Load and play the new track
                loadTrack(trackIndex);
                playTrack();
            }))));
// loadTrack(trackIndex); // commented out this test call: may be obsolete
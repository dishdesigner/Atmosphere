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
    userinput: {key1: value1, key2: value2},
    happy: {
        genres: ["pop"],
    },
    sad: {
        genres: [],
        keywords: []
    }
}
var userInput = "happy";
var keywords = moods[userInput].keywords;

function getWeather() {
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "7463f1062fmsh1fe8735365773c9p140f00jsne6b9b6acaa80", // this shields private API keys
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
getMusic(userInput)
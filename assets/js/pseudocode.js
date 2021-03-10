
/***************************
 * PSEUDOCODE for Project 1: Atmosphere
 *

ACCEPTANCE CRITERIA:

> When user launches app, current date & weather is displayed and user can choose an emoticon button to match their current mood.

> With both weather and mood selected, the app displays and starts a playlist automatically with songs selected based on combinations of weather attributes and user mood.

> The current playing song displays album art.

> When song is playing, user can give Thumbs Up / Thumbs Dn feedback to the app. This data can be stored and used to "teach" the algorithm better matches in the future.

> TESTING VERSION ONLY: to demo the app, we are placing a pulldown menu option to change the current city to places all over the world with very different climates. Otherwise, there would be no way to see the song choices the app makes based on different weather conditions.

> The app is responsive to screen sizes down to mobile phones, which are the likely form factor for this kind of app to be geolocated with current location's weather anyway.

***************************
***************************
* FUNCTIONS
*

***************************
MomentJS of the current date / time writes to variable of date displayed with weather

***************************
Pulldown menu city choice has to send API call to OpenWeather to pull that city's current weather.

***************************
Display the city, date, current weather in the weather card

***************************
WILLIAM:
Mood Buttons
> Store user mood input from buttons with listeners
> On Change, this has to repeat call to Shazam

***************************
DARRIN:
> ICON sent from OpenWeather is matched to a musical genre based on a hard-coded (subjective) table.
> User mood choice is added to search string directly.
> API call query string is built to find music in the icon's genre and with the Mood button's label value.

Example Query Strings:
URL + ?genre=jazz&?search=happy
URL + ?genre=country&?search=angry

***************************
POPULATE PLAYLIST
Take response from Shazam from API call and build playlist returned.

***************************
PLAY SONG
Play next song in returned playlist.

***************************
Thumbs Rating:
Up stores localstorage rating  of good rating with song title / artist
Dn stores localstorage rating of bad rating with song title / artist AND advances track

***************************












**********************************
*/
# Midi Hero!
View it live at: <https://midi-ddr.herokuapp.com/>

### Game Page
![middHero](https://github.com/jpmc3630/project2/blob/master/public/images/Screenshot3.png)

### Levels Page
![middHero](https://github.com/jpmc3630/project2/blob/master/public/images/screenshot2.PNG)

### Home Page
![middHero](https://github.com/jpmc3630/project2/blob/master/public/images/screenshot1.PNG)

## Motivation

In order to try and challenge ourselves we decided on creating a game for the user to immerse themselves in and take them back to the world of DDR (Dance Dance Revoultion). The diference is, there's no dancing in this game just playing the drums! The game turned out a little like Guitar Hero for the browser, hence the name Midi Hero.

## Design Process

We began researching midi files to use in this project as it allowed a practical way to sync the game with a long piece of music - obviously crucial to a DDR/Guitar Hero style game. With javascript/browser environments not being super precise with timing, this allowed us a way to ensure the game was always in sync. The use of midi files also allowed us to generate our game levels from the midi files themselves, saving us an enourmous amount of time and tedious work. It also allowed us to synthesize the audio for the user's gameplay interaction, which allowed us to add melodic instruments that respond to the music notation in pitch, in addition to atonal percussion sounds.

## Future Development

We have an unfinished Level Creator in development. This would allow custom midi files to be uploaded, and key gameplay aspects could be decided by the creator. For example, which midi instruments/tracks from the song are mapped to the game pads for playability, and which are to be audible in the backing music (to create karaoke style playability). Other customisable aspects include track titles for drum pad labels, and level/song start and finish points. 

This would vastly accelerate the speed of new level creation and could even create a community of contributors to the game. The development of new levels and the Level Creator itself will likely depend on feedback recieved about the game as a whole. 

Looking further to the future, we would consider using a Canvas or WebGL environment, as the DOM performance is a bottleneck to adding additional features.

## Tech/Framework & Dependencies

MIDI files, webaudio-tinysynth, NodeJS, Express, HTML, CSS, JavaScript, Express-Handlebars, Sequelize, MySQL Database, JQuery, AJAX, Bootstrap, Googlefonts.

The game is run from a nodeJS/express server. The game app was written in plain javascript and best pratices were attempted to improve performance and efficiency, as the game is heavy on DOM manipulation. We also used custom css styling and a minimal design for performance reasons also. A little jQuery was used for AJAX calls. A remote SQL server is used with the Sequalize ORM for highscores data. Some Bootsrap was used for the landing page.

### New Technology Used

* MIDI (Musical Instrument Digital Interface) files
* webaudio-tinysynth https://github.com/g200kg/webaudio-tinysynth

## Additional Tools Used

* midi-parser-js https://github.com/colxi/midi-parser-js <br>
We used this web based midi to JSON parser to generate JSON objects we could easily interpret to draw the game levels (midi channel notation). This output was then hardcoded into our game levels.
* Aria Maestosa MIDI file editor https://github.com/ariamaestosa/ariamaestosa <br>
Aria Maestosa is an open-source (GPL) midi sequencer/editor. While we used parsed midi data on one side, we used edited midi files to play the corresponding backing audio. We also used this editor to generate high tick frequency clock tracks that helped to keep our game tightly synced.

## Inspiration & Similar Projects

* midi-visualizer https://github.com/notwaldorf/midi-visualizer
This neat javascript midi visualiser gave us the idea to use midi files to draw our notation for our game levels in the first place. It also made for a useful development tool as a super quick way to get a visual on complex midi files we were working on!

## Copyright

James McGlone, Firoz Ahmed Bhuyan, Brad Cook

© 2020 All Rights Reserved

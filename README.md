# Midi Hero!

View it live at: <https://midi-ddr.herokuapp.com/>

### Home Page
![middHero-coverpage_PLACEHOLDER](https://github.com/jpmc3630/project2/blob/master/public/images/screenshot1.PNG)

### Levels Page
![middHero-coverpage_PLACEHOLDER](https://github.com/jpmc3630/project2/blob/master/public/images/screenshot2.PNG)

### Game Page
![middHero-coverpage_PLACEHOLDER](https://github.com/jpmc3630/project2/blob/master/public/images/screenshot3.PNG)

## Motivation:

In order to try and challenge ourselves we decided on creating a game for the user to immerse themselves in and take them back to the world of DDR (Dance Dance Revoultion). The diference is, there's no dancing in this game just playing the drums!

## Design Process:

We began researching midi files to use in this project as it allowed a practical way to sync the game with a long piece of music - obviously crucial to a DDR/Guitar Hero style game. With javascript/browser environments not being super precise with timing, this allowed us a way to ensure the game was always in sync. The use of midi files also allowed us to generate our game levels from the midi files themselves, saving us enourmous time. It also allowed us to synthesize the audio for user input, which allowed us to add melodic components that respond to the music, rather than just atonal percussion samples.

## Tech/framework used:

MIDI files, webaudio-tinysynth, HTML, CSS, JavaScript, Handlebars, Sequelize, MySQL Database, Express, JQuery, AJAX, Bootstrap, Googlefonts.

The game app was written in plain javascript and best pratices were attempted to improve performance and efficiency , as the game is heavy on DOM manipulation. We also used custom css styling and a minimal design for performance reasons also. A little jQuery was used for AJAX calls. The game is run from a nodeJS/express server. Some Bootsrap was used for the landing page.

### New Technology used:

MIDI (Musical Instrument Digital Interface) files.
webaudio-tinysynth

## Copyright:

James McGlone, Firoz Ahmed Bhuyan, Brad Cook

© 2020 All Rights Reserved

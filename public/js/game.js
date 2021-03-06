
function loadMidiUrl(){
  synth.loadMIDIUrl('/js/levels/' + midiFileName);
}

function loadMidi(files){
  var reader = new FileReader();
  reader.onload=(e)=>{
    synth.loadMIDI(reader.result);
    
  }
  reader.readAsArrayBuffer(files[0]);
}

var offset = 0 //offset is the global variable for playhead/ current tick
let paused = false;

function playMidi(){


  synth.playMIDI();
  
// stuff to get the stage rolling:
    let e = document.getElementById('stage');
    
    let roll = setInterval(function(){
      if (!paused) {
        e.style.top = offset + 'px';

        var st=synth.getPlayStatus();
        
        offset = -1 * st.curTick;

        if (st.curTick > levelEndTick) {
          endGame();
          
        }
      }
    }, 1);


    

}
function stopMidi(){
  synth.stopMIDI();
}
function SetProgram(p){
  synth.send([0xc0,p]);
}
function Init(){
  synth=new WebAudioTinySynth({voices:64});
  for(var i=0;i<128;++i){
    var o=document.createElement("option");
    o.innerHTML=synth.getTimbreName(0,i);
    document.getElementById("prog").appendChild(o);
  }
  // setInterval(function(){
  //   var st=synth.getPlayStatus();
  //   document.getElementById("status").innerHTML= st.curTick + '/' + st.maxTick;
  //   },1000);

}

function Test(){
  var o=synth.getAudioContext().createOscillator();
  o.connect(synth.getAudioContext().destination);
  o.start(0);
  o.stop(synth.getAudioContext().currentTime+1);
  
}
// window.onload=Init;

let targetScoreInt = 0;
let score = 0;
let misses = 0;
let finalScore = 0;
let gameOver = false;

let existingHighscores = [];

let prompt = document.getElementById('prompt');

window.onload = (event) => {

  document.getElementById("status").innerHTML=levelName;
  getHighscores(true);

  // Set difficulty variables
    let relaxEarly = 20;
    let relaxLate = 70;

    
    // get DOM elements
    let scoreBoard = document.getElementById('score');
    let targetScore = document.getElementById('targetScore');
    let missesBoard = document.getElementById('misses');

    let tr1 = document.getElementById('track1-div');
    let tr2 = document.getElementById('track2-div');
    let tr3 = document.getElementById('track3-div');
    let tr4 = document.getElementById('track4-div');
    let b1 = document.getElementById('button1-name');
    let b2 = document.getElementById('button2-name');
    let b3 = document.getElementById('button3-name');
    let b4 = document.getElementById('button4-name');

    b1.innerHTML = trackMap.track1.name;
    b2.innerHTML = trackMap.track2.name;
    b3.innerHTML = trackMap.track3.name;
    b4.innerHTML = trackMap.track4.name;

    // declare NOTE ON object for keypress beat collision detection
    let onObj = {
      track1 : [],
      track2 : [],
      track3 : [],
      track4 : [],
      track4Event : []
    }
    
    // Draw the NOTE ON and NOTE OFF notation in the DOM, and NOTE ON posiitions in NOTE ON object

   // draw the kick drum notation
    let currentPos = 0;    
    let str = ``;

    for (let i=0; i < trackNotation.track[trackMap.track1.midiTr].event.length; i++) {
        currentPos += trackNotation.track[trackMap.track1.midiTr].event[i].deltaTime;
        if (trackNotation.track[trackMap.track1.midiTr].event[i].type == 8) {
            str += `<div class="noteOn" style="height:${trackNotation.track[trackMap.track1.midiTr].event[i].deltaTime}px"></div>`;
            let strikePos = currentPos - trackNotation.track[trackMap.track1.midiTr].event[i].deltaTime;
            onObj.track1.push(strikePos);
        } else {
            str += `<div class="noteOff" style="height:${trackNotation.track[trackMap.track1.midiTr].event[i].deltaTime}px"></div>`;
        }
    }
    tr1.innerHTML = str;
    
    // draw the tr2 notation
    currentPos = 0;
    str = ``;
    for (let i=0; i < trackNotation.track[trackMap.track2.midiTr].event.length; i++) {
      currentPos += trackNotation.track[trackMap.track2.midiTr].event[i].deltaTime;
        if (trackNotation.track[trackMap.track2.midiTr].event[i].type == 8) {
            str += `<div class="noteOn" style="height:${trackNotation.track[trackMap.track2.midiTr].event[i].deltaTime}px"></div>`;
            let strikePos = currentPos - trackNotation.track[trackMap.track2.midiTr].event[i].deltaTime;
            onObj.track2.push(strikePos);
        } else {
            str += `<div class="noteOff" style="height:${trackNotation.track[trackMap.track2.midiTr].event[i].deltaTime}px"></div>`;
        }
    }
    tr2.innerHTML = str;

    // draw the tr3 notation
    currentPos = 0;
    str = ``;
    for (let i=0; i < trackNotation.track[trackMap.track3.midiTr].event.length; i++) {
      currentPos += trackNotation.track[trackMap.track3.midiTr].event[i].deltaTime;
        if (trackNotation.track[trackMap.track3.midiTr].event[i].type == 8) {
            str += `<div class="noteOn" style="height:${trackNotation.track[trackMap.track3.midiTr].event[i].deltaTime}px"></div>`;
            let strikePos = currentPos - trackNotation.track[trackMap.track3.midiTr].event[i].deltaTime;
            onObj.track3.push(strikePos);
        } else {
            str += `<div class="noteOff" style="height:${trackNotation.track[trackMap.track3.midiTr].event[i].deltaTime}px"></div>`;
        }
    }
    tr3.innerHTML = str;
  
    // draw the tr4 notation
    currentPos = 0;
    str = ``;
    for (let i=0; i < trackNotation.track[trackMap.track4.midiTr].event.length; i++) {
      currentPos += trackNotation.track[trackMap.track4.midiTr].event[i].deltaTime;
        if (trackNotation.track[trackMap.track4.midiTr].event[i].type == 8) {
            str += `<div class="noteOn" style="height:${trackNotation.track[trackMap.track4.midiTr].event[i].deltaTime}px"></div>`;
            let strikePos = currentPos - trackNotation.track[trackMap.track4.midiTr].event[i].deltaTime;
            onObj.track4.push(strikePos);
            let eventNow = [trackMap.track4.hex[0],trackNotation.track[trackMap.track4.midiTr].event[i-1].data[0],trackNotation.track[trackMap.track4.midiTr].event[i-1].data[1]];
            // .unshift();
            // console.log(eventNow);
            onObj.track4Event.push(eventNow);
        } else {
            str += `<div class="noteOff" style="height:${trackNotation.track[trackMap.track4.midiTr].event[i].deltaTime}px"></div>`;
        }
    }
    tr4.innerHTML = str;
    // console.log(onObj.track4Event);
    targetScoreInt = onObj.track1.length + onObj.track2.length + onObj.track3.length + onObj.track4.length;
    targetScore.innerHTML = ' / ' + targetScoreInt;

  Init(); // call the midi player init
  loadMidiUrl(); // load song


  //This is the KEYPRESS
  // AND COLLISION BEAT DETECTION

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
      e.target.classList.remove('playing');
  
  }

  function playSound(e) {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    // collision detection for beat and keypreses

  switch (e.keyCode) {

    case 65:
      key.classList.add('playing');
      let strike1 = -1 * offset;
      synth.send(trackMap.track1.hex);
      misses++;
      for (let i=0; i < onObj.track1.length; i++) {
        if (strike1 > (onObj.track1[i]-relaxEarly) && strike1 < (onObj.track1[i]+relaxLate)) {
            misses--;
            onObj.track1[i]=0;
            score++;
            scoreBoard.innerHTML = score;
            flashYellow(tr1);
        }
        missesBoard.innerHTML = misses;

    }
      break;

    case 83:
      key.classList.add('playing');
      let strike2 = -1 * offset;
      synth.send(trackMap.track2.hex);
      misses++;
      for (let i=0; i < onObj.track2.length; i++) {
        if (strike2 > (onObj.track2[i]-relaxEarly) && strike2 < (onObj.track2[i]+relaxLate)) {
            misses--;
            onObj.track2[i]=0;
            score++;
            scoreBoard.innerHTML = score;
            flashYellow(tr2);
        }
        missesBoard.innerHTML = misses;
    }
      break;

    case 68:
      key.classList.add('playing');
      let strike3 = -1 * offset;
      synth.send(trackMap.track3.hex);
      misses++;
      for (let i=0; i < onObj.track3.length; i++) {
        if (strike3 > (onObj.track3[i]-relaxEarly) && strike3 < (onObj.track3[i]+relaxLate)) {
            misses--;
            onObj.track3[i]=0;
            score++;
            scoreBoard.innerHTML = score;
            flashYellow(tr3);
        }
        missesBoard.innerHTML = misses;
    }
      break;

    case 70:
      key.classList.add('playing');
      let strike4 = -1 * offset;
      // synth.send(trackMap.track4.hex);
      misses++;
      for (let i=0; i < onObj.track4.length; i++) {
        if (strike4 > (onObj.track4[i]-relaxEarly) && strike4 < (onObj.track4[i]+relaxLate)) {
            misses--;

            synth.send(onObj.track4Event[i]);

            onObj.track4[i]=0;
            score++;
            scoreBoard.innerHTML = score;
            flashYellow(tr4);
        }
        missesBoard.innerHTML = misses;
    }
      break;

    case 32:
      document.getElementById('line').style.display = 'block';
      if (synth.getPlayStatus().play == 0 && gameOver == false) {
        playMidi();
        prompt.style.display = 'none';
      } else if (gameOver == false) {
        stopMidi();
        prompt.innerHTML = '<h1>PAUSED<BR> Press SPACE to continue</h1>';
        prompt.style.display = 'block';
      }
    break;
    
      default:

    }
  }

// function releaseSound(e) {

//   switch (e.keyCode) {

//     case 65:
//       // synth.allSoundOff(trackMap.track1.hex[0]);
//       e.target.classList.remove('playing');
//       break;

//     case 83:
//       // synth.allSoundOff(trackMap.track2.hex[0]);
//       e.target.classList.remove('playing');
//       break;

//     case 68:
//       // synth.allSoundOff(trackMap.track3.hex[0]);
//       e.target.classList.remove('playing');
//       break;

//     case 70:
//       // synth.allSoundOff(trackMap.track4.hex[0]);
//       e.target.classList.remove('playing');           
//       break;

//       default:
      
//     }

// }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
  // window.addEventListener('keyup', releaseSound);

  // flashes notation channel when keypress collides
  function flashYellow(elem) {
    elem.style.backgroundColor = '#ffc600';
    setTimeout(function(){
      elem.style.backgroundColor = 'lightgray';
    }, 100)
  }

}


function endGame() {
  stopMidi();
  gameOver = true;

  finalScore = score-misses;
  let resultStr = ``;
  let winner = false;
  resultStr += `<h2>Hits: ${score} <br> Misses: ${misses} <br> Final score: ${finalScore} <br> Out of a possible: ${targetScoreInt}</h2><br>`;

  if (finalScore > existingHighscores[4].score) {
    winner = true;
    resultStr += `Congratulations<br> You've made it onto the scoreboard!<br>Please enter your name<br><form><input type="text" id="name-text" placeholder="Your name"><br><button id="post-score-button" onClick="postHighscore()">Submit</button></form>`;
  } else {
    resultStr += `You didn't make it onto the scoreboard this time.<br>Better luck next time!<br><a href="${levelURL}"><button>Play Again</button></a><a href="/levels"><button>Pick New Level</button></a>`;
  }
  
  prompt.innerHTML = resultStr;
  prompt.style.display = 'block';
  if (winner == true) document.getElementById('name-text').select();

  paused = true;

}

function postHighscore() {

  let nick = document.getElementById('name-text').value;
  prompt.innerHTML = `Loading...`;


  let newEntry = {
    levelid: levelID,
    nickname: nick,
    score: finalScore
  }

  let idToDelete = existingHighscores[4].id;
  $.ajax({
    method: "DELETE",
    url: "/api/highscores/" + idToDelete
  }).then(function() {

    $.post("/api/highscores", newEntry, function(data){
      getHighscores(false);
    });
  });

}


function getHighscores(initial) {

  $.get("/api/highscores/" + levelID, function(data) {
    if (initial) existingHighscores = data;
    console.log(existingHighscores);
    let str = `<h5>Highscores</h5><table>`;
    for (let i=0; i < data.length; i++) {
      str += `<tr><td>${i+1}.</td><td>${data[i].nickname}</td><td>${data[i].score}</td><tr>`
    }
    str += `</table>`;
    document.getElementById('highscores-div').innerHTML = str;
    if (!initial) prompt.innerHTML = `${str}<br><br><a href="${levelURL}"><button id="play-again-button">Play Again</button></a><a href="/levels"><button>Pick New Level</button></a>`;
    
  });
}

function loadMidiUrl(){
  synth.loadMIDIUrl('./js/levels/lawandorder.mid');
}

function loadMidi(files){
  var reader = new FileReader();
  reader.onload=(e)=>{
    synth.loadMIDI(reader.result);
    
  }
  reader.readAsArrayBuffer(files[0]);
}

var offset = 0 //offset is the global variable for playhead/ current tick


function playMidi(){


  synth.playMIDI();

// stuff to get the stage rolling:

    let e = document.getElementById('stage');
    let status2 = document.getElementById('status2');
    // var s = 1.6;
    
    let roll = setInterval(function(){
        
        // offset -= 1.6;

        e.style.top = offset + 'px';

        var st=synth.getPlayStatus();
        status2.innerHTML = 'offset:' + offset + ' --- ' + 'current tick: ' + st.curTick;

        
        offset = -1 * st.curTick;

    
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
  setInterval(function(){
    var st=synth.getPlayStatus();
    document.getElementById("status").innerHTML="Play:"+st.play+"  Pos:"+st.curTick+"/"+st.maxTick;
    // offset = -1 * st.curTick;
    // offset = 500;
    

    },10);

}

function Test(){
  var o=synth.getAudioContext().createOscillator();
  o.connect(synth.getAudioContext().destination);
  o.start(0);
  o.stop(synth.getAudioContext().currentTime+1);
  console.log(synth)
}
// window.onload=Init;



window.onload = (event) => {

    let relaxEarly = 20;
    let relaxLate = 60;
    let score = 0;
    
    let scoreBoard = document.getElementById('score');

    let trackMap = {
      track1: {
        name: 'BASS DRUM',
        hex: [0x99,0x24,100],
        midiFileTr: 0x99
      },
      track2: {
        name: 'RIM',
        hex: [0x99,0x25,100]
      },
      track3: {
        name: 'TRIANGLE',
        hex: [0x99,0x50,100]
      },
      track4: {
        name: 'LOW TIMBALE',
        hex: [0x99,0x42,100]
      }
    }

    let onObj = {
      track1 : [],
      track2 : [],
      track3 : [],
      track4 : []
    };
    
    // draw the kick drum notation
    let tr1 = document.getElementById('track1-div');
    let str = ``;
    let onTrack1 = [];
    let currentPos = 0;

    for (let i=0; i < fish.track[1].event.length; i++) {
        
        currentPos += fish.track[1].event[i].deltaTime;

        if (fish.track[1].event[i].type == 8) {
            str += `<div class="noteOn" style="height:${fish.track[1].event[i].deltaTime}px"></div>`;
            onTrack1.push(currentPos);
            
        } else {
            str += `<div class="noteOff" style="height:${fish.track[1].event[i].deltaTime}px"></div>`;
        }
    }

    onObj.track1 = onTrack1;
    tr1.innerHTML = str;


    // draw the tr2 notation
    let tr2 = document.getElementById('track2-div');
    let onTrack2 = [];    
    currentPos = 0;
    
    str = ``;
    for (let i=0; i < fish.track[3].event.length; i++) {
      currentPos += fish.track[3].event[i].deltaTime;
        if (fish.track[3].event[i].type == 8) {
            str += `<div class="noteOn" style="height:${fish.track[3].event[i].deltaTime}px"></div>`;
            onTrack2.push(currentPos);
        } else {
            str += `<div class="noteOff" style="height:${fish.track[3].event[i].deltaTime}px"></div>`;
        }
    }
    onObj.track2 = onTrack2;
    tr2.innerHTML = str;

    
    let tr3 = document.getElementById('track3-div');
    let onTrack3 = [];    
    currentPos = 0;
// draw the tr3 notation
    str = ``;
    for (let i=0; i < fish.track[2].event.length; i++) {
      currentPos += fish.track[2].event[i].deltaTime;
        if (fish.track[2].event[i].type == 8) {
            str += `<div class="noteOn" style="height:${fish.track[2].event[i].deltaTime}px"></div>`;
            onTrack3.push(currentPos);
        } else {
            str += `<div class="noteOff" style="height:${fish.track[2].event[i].deltaTime}px"></div>`;
        }
    }
    onObj.track3 = onTrack3;
    tr3.innerHTML = str;


    let tr4 = document.getElementById('track4-div');
    let onTrack4 = [];    
    currentPos = 0;
// draw the bass notation

str = ``;
    for (let i=0; i < fish.track[4].event.length; i++) {
      currentPos += fish.track[4].event[i].deltaTime;
        if (fish.track[4].event[i].type == 8) {
            str += `<div class="noteOn" style="height:${fish.track[4].event[i].deltaTime}px"></div>`;
            onTrack4.push(currentPos);
        } else {
            str += `<div class="noteOff" style="height:${fish.track[4].event[i].deltaTime}px"></div>`;
        }
    }
    onObj.track4 = onTrack4;
    tr4.innerHTML = str;

Init(); // call the midi player init
loadMidiUrl(); // load song

//This is the KEYPRESS
// AND COLLISION BEAT DETECTION

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  // const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  // if (!audio) return;

  key.classList.add('playing');
  // audio.currentTime = 0;
  // audio.play();




  // collision detection for beat and keypreses

  switch (e.keyCode) {

    case 65:
      let strike1 = -1 * offset;
      synth.send(trackMap.track1.hex);
      for (let i=0; i < onObj.track1.length; i++) {
        if (strike1 > (onObj.track1[i]-relaxEarly) && strike1 < (onObj.track1[i]+relaxLate)) {

            score++;
            scoreBoard.innerHTML = score;
            flashYellow(tr1);
        }

    }
      break;

    case 83:
      let strike2 = -1 * offset;
      synth.send(trackMap.track2.hex);
      for (let i=0; i < onObj.track2.length; i++) {
        if (strike2 > (onObj.track2[i]-relaxEarly) && strike2 < (onObj.track2[i]+relaxLate)) {
            score++;
            scoreBoard.innerHTML = score;
            flashYellow(tr2);
            
        }
    }
      break;

    case 68:
      let strike3 = -1 * offset;
      synth.send(trackMap.track3.hex);
      for (let i=0; i < onObj.track3.length; i++) {
        if (strike3 > (onObj.track3[i]-relaxEarly) && strike3 < (onObj.track3[i]+relaxLate)) {
            score++;
            scoreBoard.innerHTML = score;
            flashYellow(tr3);
        }
    }
      break;

    case 70:
      let strike4 = -1 * offset;
      synth.send(trackMap.track4.hex);
      for (let i=0; i < onObj.track4.length; i++) {
        if (strike4 > (onObj.track4[i]-relaxEarly) && strike4 < (onObj.track4[i]+relaxLate)) {
            score++;
            scoreBoard.innerHTML = score;
            flashYellow(tr4);

        }
    }
      break;
    
      default:
      
  }
  
}


const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);



// flashes notation channel when keypress collides
function flashYellow(elem) {
  elem.style.backgroundColor = '#ffc600';
  setTimeout(function(){
    elem.style.backgroundColor = 'lightgray';
  }, 100)
}

};

function loadMidiUrl(){
  synth.loadMIDIUrl('./js/levels/LawAndOrderClockFine.mid');
}

function loadMidi(files){
  var reader = new FileReader();
  reader.onload=(e)=>{
    synth.loadMIDI(reader.result);
    
  }
  reader.readAsArrayBuffer(files[0]);
}



function playMidi(){


  synth.playMIDI();

// stuff to get the stage rolling:

    let e = document.getElementById('stage');
    let status2 = document.getElementById('status2');
    // var s = 1.6;
    var offset = 0
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


    let kick = document.getElementById('kick');

    // draw the kick drum notation
    let str = ``;
    for (let i=0; i < fish.track[1].event.length; i++) {
        if (fish.track[1].event[i].type == 8) {
            str += `<div style="background-color:grey; width: 20px; height:${fish.track[1].event[i].deltaTime}px"></div>`;
        } else {
            str += `<div style="background-color:lightgrey; width: 20px; height:${fish.track[1].event[i].deltaTime}px"></div>`;
        }
    }
    str += ``;
    kick.innerHTML = str;



    let snare = document.getElementById('snare');

    // draw the hat notation
    str = ``;
    for (let i=0; i < fish.track[3].event.length; i++) {
        if (fish.track[3].event[i].type == 8) {
            str += `<div style="background-color:grey; width: 20px; height:${fish.track[3].event[i].deltaTime}px"></div>`;
        } else {
            str += `<div style="background-color:lightgrey; width: 20px; height:${fish.track[3].event[i].deltaTime}px"></div>`;
        }
    }
    str += ``;
    snare.innerHTML = str;


    let hat = document.getElementById('hat');

// draw the snare notation
    str = ``;
    for (let i=0; i < fish.track[2].event.length; i++) {
        if (fish.track[2].event[i].type == 8) {
            str += `<div style="background-color:grey; width: 20px; height:${fish.track[2].event[i].deltaTime}px"></div>`;
        } else {
            str += `<div style="background-color:lightgrey; width: 20px; height:${fish.track[2].event[i].deltaTime}px"></div>`;
        }
    }
    str += ``;
    hat.innerHTML = str;


    let bass = document.getElementById('bass');

// draw the bass notation
str = ``;
    for (let i=0; i < fish.track[4].event.length; i++) {
        if (fish.track[4].event[i].type == 8) {
            str += `<div style="background-color:grey; width: 20px; height:${fish.track[4].event[i].deltaTime}px"></div>`;
        } else {
            str += `<div style="background-color:lightgrey; width: 20px; height:${fish.track[4].event[i].deltaTime}px"></div>`;
        }
    }
    str += ``;
    bass.innerHTML = str;

Init(); // call the midi player init


};


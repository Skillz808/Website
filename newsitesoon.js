function removeMusicPlayer() {
    var elem = document.getElementById('musicplayer');
    elem.parentNode.removeChild(elem);
   }

function removeLoading() {
    var kill = document.getElementById('loading');
    kill.parentNode.removeChild(kill);
   }

function removeTour() {
    var die = document.getElementById('aboutme');
    die.parentNode.removeChild(die);
   }

function removeInfo() {
    var commit = document.getElementById('sysinfo');
    commit.parentNode.removeChild(commit);
   }

function removeGuestbook() {
    var suicide = document.getElementById('guestbook');
    suicide.parentNode.removeChild(suicide);
   }   

function time_since_update() {

    last_update = new Date('2022-01-11')
    now = Date.now()
    difference = now-last_update
    days = difference/86400000
    days = Math.round(days)
    document.write(days) 
}   

function play_custom_file(){
    var link = document.getElementById('text21').value
    document.getElementById('audioplayer').src = link
}

function play_secret_file(){
  var link = "./img/radio.flac"
  document.getElementById('audioplayer').src = link
  document.getElementById('text21').value = "Portal 2 OST - Still Alive (Radio Mix Clean)";
}


dragElement(document.getElementById("loading"));
dragElement(document.getElementById("musicplayer"));
dragElement(document.getElementById('aboutme'));
dragElement(document.getElementById('sysinfo'));
dragElement(document.getElementById('guestbook'));


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

function dragMouseDown(e){
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

function elementDrag(e){
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

function closeDragElement(){
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }

  document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('audioplayer');
    var hasAlreadyClicked = false;

    function startAudio() {
        if (hasAlreadyClicked == false) {
            audio.play();
            audio.volume = 0.5;
            document.removeEventListener('click', startAudio);
            hasAlreadyClicked = true;
        }
    }

    document.addEventListener('click', startAudio);
});
}


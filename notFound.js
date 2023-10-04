function removeMusicPlayer() {
    var elem = document.getElementById('musicplayer');
    elem.parentNode.removeChild(elem);
   }

dragElement(document.getElementById("musicplayer"));
dragElement(document.getElementById("dogbox"));

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

  document.addEventListener("DOMContentLoaded", playRandomAudio);

  function playRandomAudio() {
      const audio = document.getElementById("audioplayer");
      const currentMonth = new Date().getMonth();
      const currentDay = new Date().getDate();

      const songs = [
        {
          src: "./img/dogshrine_2.mp3",
        },
        {
          src: "./img/dogroom.mp3",
        },
        {
          src: "./img/dogshrine.mp3",
        }
      ];
  
      if (
          (currentMonth === 11 && currentDay >= 20) 
          && (currentMonth === 11 && currentDay <= 31) 
      ) {
          audio.src = "./img/winterAddiction.mp3";
          document.getElementById('text21').value = "Homebrew Browser - Main Theme (Post Shutdown)";
      } else {
          const randomValue = Math.random();
          if (randomValue < 0) {
            audio.src = "./img/dogroom.ogg";
            document.getElementById('text21').value = "Jogeir Liljedahl - Addiction";
        } else {
            const randomIndex = Math.floor(Math.random() * songs.length);
            audio.src = songs[randomIndex].src;
        }
      }
  }
  

  document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('audioplayer');
    var hasAlreadyClicked = false;

    function startAudio() {
        if (hasAlreadyClicked == false) {
            audio.play();
            audio.volume = 0.75;
            document.removeEventListener('click', startAudio);
            hasAlreadyClicked = true;
        }
    }

    document.addEventListener('click', startAudio);
});
}


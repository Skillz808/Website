let closedWindows = {};

function removeInfo() {
  document.getElementById('sysinfo').style.display = 'none';
  closedWindows['sysinfo'] = true;
}

function removeMusicPlayer() {
  document.getElementById('musicplayer').style.display = 'none';
  closedWindows['musicplayer'] = true;
  const audio = document.getElementById("audioplayer");
  audio.pause();
  audio.currentTime = 0;
}

function removeLoading() {
  document.getElementById('loading').style.display = 'none';
  closedWindows['loading'] = true;
}

function removeTour() {
  document.getElementById('aboutme').style.display = 'none';
  closedWindows['aboutme'] = true;
}

function removeVoltorbFlip() {
  document.getElementById('voltorbflip').style.display = 'none';
  closedWindows['voltorbflip'] = true;
}

function removeJsPaint() {
  document.getElementById('jspaint').style.display = 'none';
  closedWindows['jspaint'] = true;
}

function reopenWindow(windowId) {
  if (closedWindows[windowId]) {
    document.getElementById(windowId).style.display = 'block';
    delete closedWindows[windowId];
  }
}

function time_since_update() {
  let last_update = new Date('2022-01-11');
  let now = new Date();
  let years = now.getFullYear() - last_update.getFullYear();
  let months = now.getMonth() - last_update.getMonth();
  let days = now.getDate() - last_update.getDate();

  // Adjust for cases where the current month or day is earlier than the update's month/day
  if (days < 0) {
    months--;
    // Calculate the previous month's days count
    let previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += previousMonth.getDate(); // add days in the previous month
  }

  if (months < 0) {
    years--;
    months += 12; // add 12 months to adjust year
  }

  document.write(`${years} years, ${months} months, ${days} days`);
}

function play_custom_file() {
  var link = document.getElementById('text21').value;
  var audioPlayer = document.getElementById('audioplayer');
  audioPlayer.src = link;
  audioPlayer.pause();
  if (isMusicPlayerVisible()) {
    audioPlayer.play();
  }
}

function play_secret_file() {
  var link = "./img/radio.flac";
  var audioPlayer = document.getElementById('audioplayer');
  audioPlayer.src = link;
  document.getElementById('text21').value = "Portal 2 OST - Still Alive (Radio Mix Clean)";
  audioPlayer.pause();
  if (isMusicPlayerVisible()) {
    audioPlayer.play();
  }
}

function playGameAudio() {
  var audioPlayer = document.getElementById('audioplayer');
  if (audioPlayer) {
    // Define the songs and their respective text values
    var songs = [
      {
        src: "https://vgmtreasurechest.com/soundtracks/pokemon-heartgold-and-soulsilver/gtmghjfzvk/049%20Goldenrod%20Game%20Corner.mp3",
        text: "Goldenrod Game Corner"
      },
      {
        src: "https://vgmsite.com/soundtracks/pokemon-emerald-remastered-complete-original-soundtrack/loevzirrpp/1-36%20-%20Game%20Corner.mp3",
        text: "Mossdeep City Game Corner"
      },
      {
        src: "https://vgmtreasurechest.com/soundtracks/pokemon-firered-leafgreen-enhanced-soundtrack/dbhonclifa/39%20Celadon%20Game%20Corner.mp3",
        text: "Celadon Game Corner"
      },
      {
        src: "./img/ONENATIONUNDERME.mp3",
        text: "ONE NATION UNDER ME"
      }
    ];
    
    // Choose a random song
    if(document.getElementById('text21').value == "trump."){
      var selectedSong = songs[3]
    }
    else{
      var randomIndex = Math.floor(Math.random() * songs.length - 1);
      var selectedSong = songs[randomIndex];
    }

    
    // Set the src and text values
    audioPlayer.src = selectedSong.src;
    document.getElementById('text21').value = selectedSong.text;
    audioPlayer.pause();
    if (isMusicPlayerVisible()) {
      audioPlayer.play();
    }

    // Update the URL of the embedded page with the song index
    var iframe = document.getElementById('embeddedPage');
    if (iframe) {
      var url = new URL(iframe.src, window.location.origin); // Ensure correct URL context
      url.searchParams.set('songIndex', randomIndex);
      iframe.src = url.toString();
    }
  }
}

function isMusicPlayerVisible() {
  var musicPlayer = document.getElementById('musicplayer');
  return musicPlayer.style.display !== 'none';
}

function handleOverlayClick() {
  playGameAudio();
  var overlay = document.querySelector('.overlay');
  if (overlay) {
    overlay.remove();
  }
}

let zIndexCounter = 1000; // Initial high z-index value

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    // Bring the dragged element to the front
    zIndexCounter++;
    elmnt.style.zIndex = zIndexCounter;

    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  removeJsPaint();

  // Make windows draggable
  dragElement(document.getElementById("loading"));
  dragElement(document.getElementById("musicplayer"));
  dragElement(document.getElementById('aboutme'));
  dragElement(document.getElementById('sysinfo'));
  dragElement(document.getElementById('voltorbflip'));
  dragElement(document.getElementById('jspaint'));

  // Play a random audio track
  function playRandomAudio() {
    const audio = document.getElementById("audioplayer");
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();

    const songs = [
      {
        src: "https://vgmsite.com/soundtracks/pokemon-emerald-remastered-complete-original-soundtrack/gixmvcmxox/1-11%20-%20Route%20101.mp3",
        text: "Pokémon Emerald - Route 101"
      },
      {
        src: "https://vgmtreasurechest.com/soundtracks/pokemon-heartgold-and-soulsilver/gmzxvzrqib/055%20Nintendo%20Wi-Fi%20Connection.mp3",
        text: "Pokémon HGSS - Nintendo WFC"
      },
      {
        src: "https://vgmsite.com/soundtracks/pokemon-emerald-remastered-complete-original-soundtrack/hvtjbpuqgo/1-35%20-%20Cycling.mp3",
        text: "Pokémon R/S/E - Cycling"
      },
      {
        src: "https://vgmtreasurechest.com/soundtracks/pokemon-heartgold-and-soulsilver/xeitzzvlzz/089%20Route%2038.mp3",
        text: "Pokémon HG/SS - Route 38"
      },
      {
        src: "./img/addiction.wav",
        text: "Jogeir Liljedahl - Addiction"
      },
      {
        src: "./img/level2.mp3",
        text: "level2"
      }
      ,
      {
        src: "./img/trump.mp3",
        text: "trump."
      },
      {
        src: "https://vgmtreasurechest.com/soundtracks/pokemon-heartgold-and-soulsilver/yxqkoegtyn/157.%20Pok%C3%A9gear%20Radio%20%28Route%20101%29.mp3",
        text: "Pokégear Radio (Route 101)"
      }
    ];

    if ((currentMonth === 11 && currentDay >= 20) && (currentMonth === 11 && currentDay <= 31)) {
      audio.src = "./img/winterAddiction.mp3";
      document.getElementById('text21').value = "Homebrew Browser - Main Theme (Post Shutdown)";
    } else {
      const randomValue = Math.random();
      if (randomValue < 0.5) {
        audio.src = "https://vgmsite.com/soundtracks/wii-original-system-soundtrack-wii-gamerip-2006/ghalfcqpaf/3-04.%20Local%20Forecast%20%28Daytime%29.mp3";
        document.getElementById('text21').value = "Local Forecast (Daytime)";
      } else {
        const randomIndex = Math.floor(Math.random() * songs.length);
        audio.src = songs[randomIndex].src;
        document.getElementById('text21').value = songs[randomIndex].text;
      }
    }
  }
  
  playRandomAudio();

  // Start audio on user interaction
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


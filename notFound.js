function removeMusicPlayer() {
  var elem = document.getElementById('musicplayer');
  elem.parentNode.removeChild(elem);
}

dragElement(document.getElementById('musicplayer'));

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

const dogs = [
    "./img/dog-sleep.gif",
    "./img/dog-maraca.gif",
    "./img/undertale-annoying.gif"
]

const MAX_DOG_BOXES = 250;
const randomValue = Math.random();
let createdDogBoxes = 0;

function getRandomCoordinates() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const randomLeft = Math.floor(Math.random() * (screenWidth - 200)); // Subtracting 400 to keep it within the screen width
    const randomTop = Math.floor(Math.random() * (screenHeight - 100)); // Subtracting 100 to keep it within the screen height

    return { left: randomLeft + "px", top: randomTop + "px" };
}

function getRandomSize() {
    const minWidth = 100; 
    const maxWidth = 300; 
    const minHeight = 100; 
    const maxHeight = 300; 

    const randomWidth = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
    const randomHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;

    return { width: randomWidth + "px", height: randomHeight + "px" };
}

const dogBoxTitles = [
    "A Dog",
    "Also A Dog",
    "Behold: A Dog!",
    "What's this? A Dog!",
    `arfff`,
    "A Dog Emerges!",
    "Another Dog?",
    "Is it a Bird? No, A Dog!",
    "Holy Moly, A Dog!!",
    `Tobias Fox, Creator of <span style="color: yellow;"><a href="https://undertale.com/" target="_blank" style="color: yellow;">Undertale</a></span>`
];

function getRandomTitle() {
  const randomIndex = Math.floor(Math.random() * dogBoxTitles.length);

  return dogBoxTitles[randomIndex];
}

function getRandomDog() {
  if (randomValue < 0.1){
    return dogs[1];
  }
  else if (randomValue < 0.2){
    return dogs[0];
  }
  else{
    return dogs[2];
  }

}

function setDogBackground() {
    const dogImagePath = getRandomDog(); // This will get a random dog image
    document.body.style.background = `url('${dogImagePath}') no-repeat center center fixed`;
    document.body.style.backgroundSize = 'cover'; // or any other sizing you prefer
}

setDogBackground();

const finishSound = new Audio("./img/victory.wav");
finishSound.preload = "auto";

function createRandomDogBox() {

if (createdDogBoxes > MAX_DOG_BOXES) {
    return;
}

if (createdDogBoxes == MAX_DOG_BOXES) {
    finishSound.play();
}
    const randomCoordinates = getRandomCoordinates();
    const randomSize = getRandomSize();

    const dogBox = document.createElement("div");
    dogBox.className = "window";
    dogBox.style.position = "absolute";
    dogBox.style.left = randomCoordinates.left;
    dogBox.style.top = randomCoordinates.top;

    const titleBar = document.createElement("div");
    titleBar.className = "title-bar";
    titleBar.innerHTML = `
        <div class="title-bar-text">${getRandomTitle()}</div>
        <div class="title-bar-controls">
            <button aria-label="Close" onclick="removeDogBox(this.parentNode.parentNode);"></button>
        </div>
    `;

    const windowBody = document.createElement("div");
    windowBody.className = "window-body";
    windowBody.style.width = randomSize.width;
    windowBody.style.height = randomSize.height;

    const img = document.createElement("img");
    img.src = getRandomDog();
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.imageRendering = "pixelated"; 

    windowBody.appendChild(img);

    dogBox.appendChild(titleBar);
    dogBox.appendChild(windowBody);

    dragElement(dogBox);

    document.body.appendChild(dogBox);

    createdDogBoxes++;
}

const closeSound = new Audio("./img/dingloudish.mp3");
closeSound.preload = "auto";

function removeDogBox(dogBox) {
if (dogBox && dogBox.parentNode) {
    closeSound.play();
}
}

setInterval(createRandomDogBox, 2000);

document.addEventListener('DOMContentLoaded', function () {
  playRandomAudio();
});

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

  if ( //removing this broke stuff, a true skillzdevelopment.xyz classic so I just set the month to 22, surely that will work.
      (currentMonth === 22 && currentDay >= 20) &&
      (currentMonth === 22 && currentDay <= 31)
  ) {
      audio.src = "./img/winterAddiction.mp3";
      document.getElementById('text21').value = "Homebrew Browser - Main Theme (Post Shutdown)";
  } else {
      if (randomValue < 0.1) {
          audio.src = "./img/baci_perugina2.mp3";
      } else if (randomValue < 0.2){
          audio.src = "./img/dogCheck.ogg";
      } else {
          const randomIndex = Math.floor(Math.random() * songs.length);
          audio.src = songs[randomIndex].src;
      }
  }
};

document.addEventListener('DOMContentLoaded', function () {
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

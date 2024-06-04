/*
 *  Circle Game for HTML5
 */

// Debugging Variable for Circle functions
var debugging = false;

// Random Color changing Circle when clicked on
const circle = document.getElementById('circle');
const background = document.querySelector('html');

var scoreDisplay = document.getElementById('score-display');
var scoreLocationX = scoreDisplay.style.right;
var scoreLocationY = scoreDisplay.style.top;

var score = 0;
var sizeDiameter = 200;
var sizeRadius = sizeDiameter / 2;

// Sound effect when clicking the circle
var blop = new Audio('/sounds/blop.mp3');
blop.volume = 0.5;

// When clicking on a circle
circle.onclick = () => {
  circleGame();
  blop.play();
};

// Main Circle Game
function circleGame() {
  if (debugging) {
    console.log('Circle Game Function is being called.');
  }

  // Removes the page contents except for the circle and the score
  if (score == 0) {
    removePageContent();
  }

  score++;
  replaceScore(score);
  randomSize(200, 20);
  circle.style.backgroundColor = getRandomColor();
  randomPlacement(window.innerWidth, window.innerHeight);
  checkHighScoreCookie(score);
  // window.alert("High Score: " + getScoreCookie());
}

// Removing the h1, h3, and circle content
function removePageContent() {
  var title = document.querySelector('h1');
  var pageContent = document.querySelector('h3');
  var circleContent = document.getElementById('circle-content');
  title.remove();
  pageContent.remove();
  circleContent.remove();
}

// Add Replace the old Score
function replaceScore(newScore) {
  var displayScore = document.getElementById('score-display');
  var previousType = document.querySelector('h2');
  var newType = document.createElement('h2');
  var theNewScore = document.createTextNode(newScore.toString());
  newType.appendChild(theNewScore);
  displayScore.replaceChild(newType, previousType);

  if (debugging) {
    console.log(newScore + ': new Score.');
  }
}

// Checks and changes the high score cookie
function checkHighScoreCookie(score) {
  var highScore = getScoreCookie();
  if (highScore == '' || score > highScore) {
    document.cookie =
      'score= ' + score + '; expires= ' + getExperationUTC() + ';path=/';
  }
}

// Gets the high score cookie
function getScoreCookie() {
  var cookieArray = document.cookie.split(';');
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf('score=') == 0) {
      return cookie.substring(6, cookie.length);
    }
  }
  return '';
}

// Gets Expire Cookie Time
function getExperationUTC() {
  var date = new Date();
  var days = 30;
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  return date.toUTCString();
}

// Reset the high score cookie
function resetScoreCookie() {
  document.cookie = 'score=; expires=Weds, 01 Jan 2020 00:00:00 GMT';
}

// Random Color in Hex
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Moves the circle arrround the website
function randomPlacement(maxX, maxY) {
  var randomX = Math.floor(Math.random() * (maxX - sizeDiameter + 1));
  var randomY = Math.floor(Math.random() * (maxY - sizeDiameter + 1));

  circle.style.position = 'absolute';
  circle.style.left = randomX.toString() + 'px';
  circle.style.top = randomY.toString() + 'px';

  if (debugging) {
    console.log(
      'Random X value as a px: ' +
        randomX +
        '\nRandom Y value as a px: ' +
        randomY
    );
  }
}

// Generates a random size for the circle
function randomSize(max, min) {
  var newSize = Math.floor(Math.random() * (max - min + 1)) + min;
  sizeDiameter = newSize;
  circle.style.height = newSize.toString() + 'px';
  circle.style.width = newSize.toString() + 'px';

  if (debugging) {
    console.log(sizeDiameter + ': Diameter has been added to the circle.');
  }
}

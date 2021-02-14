/*
*   Footer: Information and Sound Pop-ups
*/

// Debugging Variable for Footer functions
var debugging = false;

// Objects for sound toggle
var sound = document.getElementById("sound");


// Plays the soundtrack on window load
var soundtrack = new Audio("/sounds/soundtrack.mp3");
soundtrack.volume = 0.2;

// Uncomment
// window.onload = soundtrack.play();

// Variable for if sound is on or off
var isSoundOn = true;

sound.onclick = function() {
    toggleSound();
}

// Toggles the sound
function toggleSound() {
    if(isSoundOn) {
        sound.src = "/img/speaker-off.svg";
        soundtrack.pause();
        isSoundOn = false;
    }
    else {
        sound.src = "/img/speaker-on.svg";
        soundtrack.play();
        isSoundOn = true;
    }
}

// Variable for if the information popup is visable or not
var isVisableInfo = false;

// Objects for info toggle
var info = document.getElementById("information");
var infoX = document.getElementById("info-x");

// Onclick functions for info and info X
info.onclick = function() {
    toggleInfoPopup();
}

infoX.onclick = function() {
    toggleInfoPopup();
}

// Variable for the first click animation
var isFirstClickonInfo = true;

// Toggles the info popup to visable
function toggleInfoPopup() {
    if(isVisableInfo) {
        document.getElementById("info-popup").style.visibility = "hidden";
        isVisableInfo = false;
    }
    else {
        document.getElementById("info-popup").style.visibility = "visible";
        isVisableInfo = true;
        if(isFirstClickonInfo) {
            document.getElementById("creator").animate([
                {
                    opacity: 1,
                    easing: 'ease-out',
                    transform: 'translateX(0px)'
                },
                {
                    opacity: 0,
                    easing: 'ease-in',
                    transform: 'translateX(200px)'
                }], 
                {
                    duration: 7500,
                    direction: 'reverse'
                } 
            );
            isFirstClickonInfo = false;
        }
        
    }
    
}


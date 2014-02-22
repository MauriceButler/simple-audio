var crel = require('crel'),
    audioElements = doc('audio'),
    sounds = {};

for (var i = 0; i < audioElements.length; i++) {
    sounds[audioElements[i].className] = audioElements[i];
}

// Solves chrome for andriod issue 178297 Require user gesture
// https://code.google.com/p/chromium/issues/detail?id=178297
// Fix based on code from http://blog.foolip.org/2014/02/10/media-playback-restrictions-in-blink/
if (mediaPlaybackRequiresUserGesture()) {
    window.addEventListener('keydown', removeBehaviorsRestrictions);
    window.addEventListener('mousedown', removeBehaviorsRestrictions);
    window.addEventListener('touchstart', removeBehaviorsRestrictions);
}

function mediaPlaybackRequiresUserGesture() {
    // test if play() is ignored when not called from an input event handler
    var video = crel('video');
    video.play();
    return video.paused;
}

function removeBehaviorsRestrictions() {
    for (var i = 0; i < audioElements.length; i++) {
        audioElements[i].load();
    }

    window.removeEventListener('keydown', removeBehaviorsRestrictions);
    window.removeEventListener('mousedown', removeBehaviorsRestrictions);
    window.removeEventListener('touchstart', removeBehaviorsRestrictions);
}

function playSound(sound) {
    for (var key in sounds) {
      sounds[key].pause();
    }

    sounds[sound].load();
    sounds[sound].play();
}

module.exports = {
    playSound: playSound
};
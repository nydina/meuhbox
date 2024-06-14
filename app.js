var keys = [81, 83, 68, 70, 71, 72, 74, 75, 76];

// Function to handle both keydown and touchstart events
function playSound(keyID) {
    var sound = document.getElementById(keyID.toString());
    if (sound) {
        sound.currentTime = 0; // Rewind to the start (important for rapid re-triggers)
        sound.play();
    }
}

// Keydown event listener
document.addEventListener('keydown', function(e) {
    var keyID = e.keyCode || e.which;
    if (keys.includes(keyID)) {
        playSound(keyID);
    }
});

// Touchstart event listener
keys.forEach(function(keyID) {
    var keyElement = document.querySelector('[data-key="' + keyID + '"]');
    if (keyElement) {
        keyElement.addEventListener('touchstart', function(e) {
            e.preventDefault(); // Prevent the default touch event behavior
            playSound(keyID);
        });

        keyElement.addEventListener('click', function(e) {
            playSound(keyID);
        });
    }
});

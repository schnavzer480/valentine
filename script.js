document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("bouncing");

    function getRandomPosition() {
        var randomX = Math.floor(Math.random() * (window.innerWidth - 100)); // Subtracting button width
        var randomY = Math.floor(Math.random() * (window.innerHeight - 100)); // Subtracting button height
        return { x: randomX, y: randomY };
    }

    function moveButton() {
        var newPosition = getRandomPosition();
        button.style.position = "absolute";
        button.style.left = newPosition.x + "px";
        button.style.top = newPosition.y + "px";
    }

    // Handle click event
    button.addEventListener("click", moveButton);

    // Handle touch events for smartphones and tablets
    var touchStartX, touchStartY;
    button.addEventListener("touchstart", function(event) {
        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
    });

    button.addEventListener("touchend", function(event) {
        var touchEndX = event.changedTouches[0].clientX;
        var touchEndY = event.changedTouches[0].clientY;
        // Check if touch movement is minimal to prevent accidental movements
        var touchMoveThreshold = 10; // Adjust as needed
        if (Math.abs(touchEndX - touchStartX) < touchMoveThreshold && Math.abs(touchEndY - touchStartY) < touchMoveThreshold) {
            moveButton();
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var otherButton = document.querySelector(".content button:not(#bouncing)");

    otherButton.addEventListener("click", function() {
        window.location.href = "valentines.html";
    });
});
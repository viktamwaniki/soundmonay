// script.js

function toggleMenu() {
    var topNav = document.getElementById('topNav');
    if (topNav.style.display === 'block') {
        topNav.style.display = 'none';
    } else {
        topNav.style.display = 'block'; // Show the nav when the button is clicked
    }
}

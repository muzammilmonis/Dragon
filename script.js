// script.js

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Add event listener to the dark mode button
document.getElementById('dark-mode-button').addEventListener('click', toggleDarkMode);

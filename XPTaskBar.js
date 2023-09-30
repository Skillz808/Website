// Get DOM elements
const startButton = document.getElementById('start-button');
const taskIcons = document.querySelectorAll('.task-icon');
const systemIcons = document.querySelectorAll('#system-icons img');
const systemTime = document.getElementById('system-time');
const systemDate = document.getElementById('system-date');

// Function to toggle the Start menu
function toggleStartMenu() {
    // You can replace this with your actual Start menu implementation
    alert('Start menu clicked!');
}

// Event listeners
startButton.addEventListener('click', toggleStartMenu);

taskIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        // Handle task icon click
        const appName = icon.querySelector('img').alt;
        alert(`Opened ${appName}`);
    });
});

systemIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        // Handle system tray icon click
        const iconName = icon.alt;
        alert(`Clicked on ${iconName}`);
    });
});

// Function to update the system time and date
function updateSystemTime() {
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    systemTime.textContent = now.toLocaleTimeString(undefined, options);
    systemDate.textContent = now.toLocaleDateString();
}

// Update system time and date every second
setInterval(updateSystemTime, 1000);

// Initial update
updateSystemTime();

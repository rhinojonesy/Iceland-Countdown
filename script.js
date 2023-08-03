// Set the target date and time for the countdown (e.g., April 18, 2024, 12:00:00 UTC)
const targetDate = new Date("2024-04-18T12:00:00Z").getTime();

// Function to update the countdown
function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown has reached zero, display a message
  if (timeRemaining < 0) {
    countdownElement.innerHTML = "Countdown has ended!";
  }
}

// Call the updateCountdown function every second to keep the countdown updated
setInterval(updateCountdown, 1000);

// Initial call to update the countdown when the page loads
updateCountdown();

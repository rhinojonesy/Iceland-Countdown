// Set the date for the countdown in "YYYY-MM-DD" format
const countdownDate = new Date("2024-04-18").getTime();

// Function to update the countdown
function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = countdownDate - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

  // If the countdown is over, display 00:00:00:00
  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    document.getElementById("days").innerText = '00';
    document.getElementById("hours").innerText = '00';
    document.getElementById("minutes").innerText = '00';
    document.getElementById("seconds").innerText = '00';
  }
}

// Call the updateCountdown function every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to avoid initial delay
updateCountdown();

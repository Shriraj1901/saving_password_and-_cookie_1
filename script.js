document.addEventListener('DOMContentLoaded', function() {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // 1. Get the value of the 'count' cookie
  // 2. If the cookie exists, increment the value and update the cookie
  // 3. If the cookie does not exist, create it and set the value to 1
  // 4. Display the count on the webpage

  // your code here
});
document.addEventListener('DOMContentLoaded', function() {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // Initialize or increment the 'count' cookie
  let count = parseInt(getCookie('count'));

  if (isNaN(count)) {
    count = 0;
  }

  count += 1;

  setCookie('count', count, 7); // Set/update the cookie with 7 days expiry

  // Display the count on the webpage
  const counterElement = document.getElementById('counter');
  if (counterElement) {
    counterElement.textContent = 'You have visited this page ' + count + ' times.';
  } else {
    // If the counter element doesn't exist, create and append it
    const newCounter = document.createElement('p');
    newCounter.id = 'counter';
    newCounter.textContent = 'You have visited this page ' + count + ' times.';
    document.body.appendChild(newCounter);
  }
});
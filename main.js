// Show the loader
document.querySelector('.loader').style.display = 'flex';

// Hide the loader after a few seconds (for demonstration purposes)
setTimeout(function() {
  document.querySelector('.loader').style.display = 'none';
}, );


window.onload = function() {
    // Remove the loader when the page has finished loading
    document.querySelector('.loader .spinner').style.display = 'none';
  };
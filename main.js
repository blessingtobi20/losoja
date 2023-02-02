// Show the loader
document.querySelector('.loader').style.display = 'flex';

// Hide the loader after a few seconds (for demonstration purposes)
setTimeout(function() {
  document.querySelector('.loader').style.display = 'none';
}, 3);

window.addEventListener('load', function() {
    document.querySelector('.loader').style.opacity = '0'
  });
  

/*
  -----------------
    N A V   B A R
  -----------------
*/

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 10) {
      $('#nav').addClass('shrink');
    }
    else {
      $('#nav').removeClass('shrink');
    }
  });
});


/*
  -------------------------
    S N O W   F L A K E S
  -------------------------
*/
window.onload = function() {

  // GET CANVAS/CONTECT - STORED IN VAR
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');

  $(document).mousemove(function(e){
    $('.camvas').css({left:e.pageX, top:e.pageY});
  })

  // SET DIMENSIONS
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight * 0.4;

  // SNOWFLAKE GENERATION
  var maxFlakes = 75;
  var flakes= [];

  // APPLY ATTRIBUTES TO SNOW FLAKES
  for(var i = 0; i < maxFlakes; i++) {
    flakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 5+1.5, // MIN OF 2px/MAX OF 6.5px - RADIUS
      d: Math.random() + 1 // FLAKE DENSITY
    })
  }

  // DRAW FLAKES ONTO CANVAS
  function snowFlakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    for(var i = 0; i < maxFlakes; i++) {
      var f = flakes[i];
      ctx.moveTo(f.x, f.y)
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
    }
    ctx.fill();
    dropFlakes();
  }

  // ANIMATE FLAKES
  var angle = 0;
  function dropFlakes() {
    angle += 0.01;
    for (var i = 0; i < maxFlakes; i++) {
      // STORE CURRENT FLAKE
      var f = flakes[i];

      // UPDATE COORDINATES 
      f.y += Math.pow(f.d, 2) + 1;
      f.x += Math.sin(angle) + 2;

      // START NEW SLOWFLAKE ONCE REACH BOTTOM
      if(f.y > canvas.height) {
        flakes[i] = {x: Math.random() * canvas.width, y: 0, r: f.r, d: f.d}
      }
    }
  }

  setInterval(snowFlakes, 25);
}

/*
  -----------------------
    T Y P E W R I T E R
  -----------------------
*/

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  };

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 350;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
};


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
};
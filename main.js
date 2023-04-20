var image = document.getElementById('my-image');
var heading = document.getElementById('my-heading');
var h1 = document.querySelector('h1');
var center = document.querySelector('.center');
var paragraph = document.getElementById('my-paragraph');
var audio = document.getElementById('my-audio');
var dropdown = document.getElementById('my-dropdown');

image.addEventListener('click', function() {
    heading.textContent = 'No Way! A Magical Unicorn!';
    heading.style.fontFamily = "'Press Start 2P', cursive";
  image.src = 'images/unicorn.png';
  document.body.style.backgroundColor = 'antiquewhite';
  document.body.style.backgroundImage = 'radial-gradient(circle, white, #e9008d,#f6841b,#fcea08,#6eb63f,#05aded, white, #e9008d)';
  h1.style.fontFamily = "Press Start 2P, cursive";
  h1.style.fontSize = "60px";
  h1.style.textAlign = "center";
  h1.style.color = "white";
  center.style.marginLeft = 'auto';
  center.style.marginRight = 'auto';
  paragraph.style.fontFamily = "'Press Start 2P', cursive";
  paragraph.textContent = "Woah! He's never actually been a regular horse! He was magic all along! He's a unicorn! Wait, but he has wings? Maybe he's a pegasus? Who cares!! He's so magical and mystical! He's awesome!";
  heading.style.color = 'white';
heading.style.fontSize = '60px';
paragraph.style.color = 'white';
paragraph.style.fontSize = '20px';
heading.style.textShadow = '1px 1px 1px #000';
paragraph.style.textShadow = '1px 1px 1px #000';
audio.currentTime = 0; 
  audio.play();
  if (!audio.played.length) {
    audio.play();
  }
});


dropdown.addEventListener('change', function() {
    if (dropdown.value == 1) {
      image.src = "images/birthdayhorse.png";
      heading.textContent = 'Birthday Horse';
      paragraph.textContent = "Aww it's the regular horse's birthday. Happy Birthday horse! Everyone wish him a happy birthday. I wonder how old he is.";
    } else if (dropdown.value == 2) {
      image.src = 'images/image2.jpg';
      heading.textContent = 'Another Heading';
      paragraph.textContent = 'Another Paragraph';
    } else if (dropdown.value == 3) {
      image.src = 'images/image3.jpg';
      heading.textContent = 'Third Heading';
      paragraph.textContent = 'Third Paragraph';
    }
  });



var urls = [
    'https://www.maxwaugh.com/wp-content/uploads/2016/04/quokka041816australia77.jpg',
    'https://i.pinimg.com/736x/ee/10/30/ee103066796bf875e0f3961635414002--goals-in-life-my-goals.jpg',
    'http://cms.mentalfloss.com/sites/default/files/badass.png',
    'https://images.thewest.com.au/publication/B88629240Z/GG819913H.4-1.jpg?imwidth=800&impolicy=.auto',
  ];
  
  // The index (serial number) of the current image
  var i = 0;
  
  // Grab handles onto HTML elements.
  var leftButton = document.getElementById('left');
  var rightButton = document.getElementById('right');
  var picture = document.getElementById('picture');
  
  // Retreat
  leftButton.onclick = function() {
    i = (i - 1 + urls.length) % urls.length;
    picture.src = urls[i]; 
  }
  
  // Advance
  rightButton.onclick = function() {
    i = (i + 1) % urls.length;
    picture.src = urls[i]; 
  }
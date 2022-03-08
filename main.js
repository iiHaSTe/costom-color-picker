// get div
var bg = document.getElementById('color');

// red
var red = document.getElementById('red');
var redValue = document.getElementById('redValue');


redValue.textContent = red.value;
red.oninput = function(){
  // change background color by red
  bg.style.backgroundColor =
    `rgb(${red.value}, ${green.value}, ${blue.value})`;
  redValue.textContent = this.value;
}
// green
var green = document.getElementById('green');
var greenValue = document.getElementById('greenValue');

greenValue.textContent = green.value;
green.oninput = function(){
  // change bg color by green
  bg.style.backgroundColor =
    `rgb(${red.value}, ${green.value}, ${blue.value})`;
  greenValue.textContent = this.value;
}
// blue
var blue = document.getElementById('blue');
var blueValue = document.getElementById('blueValue');

blueValue.textContent = blue.value;
blue.oninput = function() {
  // change bg color by blue
  bg.style.backgroundColor =
    `rgb(${red.value}, ${green.value}, ${blue.value})`;
  blueValue.textContent = this.value;
}
bg.style.backgroundColor =
  `rgb(${red.value}, ${green.value}, ${blue.value})`;
